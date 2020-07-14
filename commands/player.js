var { Client, MessageEmbed } = require('discord.js');
var config = require('../config.json');
var fetch = require('node-fetch');

module.exports.run = async (client, msg, args) => {
  if (!args[0]) return msg.channel.send(`**Usage!** ${config.discordPrefix}player <playername>`);

  let response = await fetch(
    config.apiUrl + '/mc/player/' + args[0].toLowerCase() + '?simple=true'
  );
  let body = await response.json();
  if (body['notFound']) return msg.channel.send('Invalid player.');

  let embed = new MessageEmbed();
  console.log(body.user);
  embed.setTitle(`${args[0]}'s statistics`);
  embed.setColor('RED');
  embed.setDescription(`Displaying **${args[0]}**'s ${config.servername} statistics.`);
  embed.setThumbnail('https://crafatar.com/avatars/' + body.user.uuid);
  embed.addField('Kills', body.user.kills ? body.user.kills : '0', true);
  embed.addField('Deaths', body.user.deaths ? body.user.deaths : '0', true);
  embed.addField('Matches played', body.user.matches, true);
  embed.addField('First joined', new Date(body.user.initialJoinDate).toUTCString(), true);
  embed.addField('Last joined', new Date(body.user.lastOnlineDate).toUTCString(), true);
  embed.addField('Wins', body.user.wins ? body.user.wins : '0', true);
  embed.addField('Losses', body.user.losses, true);
  embed.addField('W/L', (body.user.wins / body.user.losses).toFixed(2), true);
  embed.addField(
    'K/D',
    body.user.kills !== 0 && body.user.deaths !== 0
      ? (body.user.kills / body.user.deaths).toFixed(2)
      : '*(None)*',
    true
  );
  embed.addField('Level', body.user.level, true);
  embed.addField('Wool destroys', body.user.wool_destroys, true);

  let tags = stripColoursFromTags(body.user.tags);
  embed.addField('Tags', tags.length === 0 ? '*(None)*' : tags.join('\n'), true);
  embed.addField(
    'Ranks',
    body.user.ranks.length === 0
      ? '*(None)*'
      : (await getPlayerRanks(args[0]))
          .map(rank => `**\`${rank.display || rank.name.toUpperCase()}\`**`)
          .join('\n'),
    true
  );
  msg.channel.send({ embed });
};

const colourRegex = /&[0-9A-FK-OR]/gi;
var stripColoursFromTags = tags => {
	return tags.map(t => `\`${t.replace(colourRegex, '')}\``);
};

var getPlayerRanks = async playerName => {
	let response = await fetch(config.apiUrl + `/mc/player/${playerName}/ranks`);
	let playerRankList = await response.json();
	return playerRankList;
};

module.exports.help = {
  name: "player",
  description: "Grab a player's stats profile.",
  usage: "player <username>"
};
