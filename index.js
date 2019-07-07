/*
 * Rewritten on Sat Dec 08 2018
 * Copyright (c) 2018 Daniel Gulic
 */

var { Client, MessageEmbed } = require('discord.js');
var fetch = require('node-fetch');
var client = new Client({ disableEveryone: true });
var config = require('./config.json');
client.login(config.discordToken);

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
  console.log(client.users.size);
  await client.user.setActivity(`with about ${client.users.size} users (${config.discordPrefix}help)`);
  setInterval(() => {
    console.log(client.users.size);
    client.user.setActivity(`with about ${client.users.size} users (${config.discordPrefix}help)`)
  }, 60000 * 7);
});

client.on('message', async (msg) => {
  if (msg.author.bot || msg.author.id == client.user.id) return;
  var args = msg.content.slice(0).trim(config.discordPrefix.length).split(/ +/g);
  args.shift();

  if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'player')) {
    if (!args[0]) return msg.channel.send(`**Usage!** ${config.discordPrefix}player <playername>`);
      let response = await fetch(config.apiUrl + '/mc/player/' + args[0].toLowerCase());
      let body = await response.json();
      if (body['notFound']) return msg.channel.send('Invalid player.');
      let embed = new MessageEmbed();
      console.log(body.user);
      embed.setTitle(`${args[0]}'s statistics`);
      embed.setColor('RED');
      embed.setDescription(`Displaying **${args[0]}**'s Warzone statistics.`);
      embed.setThumbnail('https://crafatar.com/avatars/' + body.user.uuid);
      embed.addField('Kills', body.user.kills ? body.user.kills : '0', true);
      embed.addField('Deaths', body.user.deaths ? body.user.deaths : '0', true);
      embed.addField('Matches played', body.user.matches.length, true);
      embed.addField('First joined', new Date(body.user.initialJoinDate).toUTCString(), true);
      embed.addField('Last joined', new Date(body.user.lastOnlineDate).toUTCString(), true);
      embed.addField('Wins', body.user.wins ? body.user.wins : '0', true);
      embed.addField('Losses', body.user.losses, true);
      embed.addField('W/L', (body.user.wins / body.user.losses).toFixed(2), true);
      embed.addField('K/D', body.user.kills !== 0 && body.user.deaths !== 0 ? (body.user.kills / body.user.deaths).toFixed(2) : '*(None)*', true);
      embed.addField('Level', body.user.level, true);
      embed.addField('Wool destroys', body.user.wool_destroys, true);
      embed.addField('Ranks', body.user.ranks.length === 0 ? '*(None)*' : (await getPlayerRanks(args[0])).map(rank => `\`${rank.name.toUpperCase()}\``).join('\n'), true);
      msg.channel.send({ embed });
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'leaderboard') || msg.content.toLowerCase().startsWith(config.discordPrefix + 'lb')) {
    if (!args[0]) return msg.channel.send(`**Usage!** ${config.discordPrefix}leaderboard (xp|kills)`);
    if (args[0].toLowerCase() === 'xp' || args[0].toLowerCase() === 'level') {
      let response = await fetch(config.apiUrl + '/mc/leaderboard/xp');
      let leaderboard = await response.json();
      let lbMsg = [];
      var count = 0;
      leaderboard.slice(0, 10).forEach(player => {
        count++;
        if (count !== 11) {
          lbMsg.push(`${getNumberEmoji(count)} **${player.name}** (level ${player.level})`);
        }
      });
      let embed = new MessageEmbed();
      embed.setTitle(`Top 10 players on Warzone (sorted by xp)`);
      embed.setColor('RED');
      embed.setDescription(lbMsg.join('\n'));
      msg.channel.send({ embed });
    } else if (args[0].toLowerCase() === 'kills' || args[0].toLowerCase() === 'kill') {
      let response = await fetch(config.apiUrl + '/mc/leaderboard/kills');
      let leaderboard = await response.json();
      let lbMsg = [];
      var count = 0;
      leaderboard.slice(0, 10).forEach(player => {
        count++;
        if (count !== 11) {
          lbMsg.push(`${getNumberEmoji(count)} **${player.name}** (${player.kills} kills)`);
        }
      });
      let embed = new MessageEmbed();
      embed.setTitle(`Top 10 players on Warzone (sorted by kills)`);
      embed.setColor('RED');
      embed.setDescription(lbMsg.join('\n'));
      msg.channel.send({ embed });
    } else {
      return msg.channel.send(`**Usage!** ${config.discordPrefix}leaderboard (xp|kills)`);
    }
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'help')) {
    let embed = new MessageEmbed();
    embed.setColor('RED');
    embed.setDescription('View Warzone player stats, punishments, leaderboards and server info with Warzone Stats!');
    embed.addField('Commands', [
      `\`${config.discordPrefix}help\``,
      `\`${config.discordPrefix}player <playername>\``,
      `\`${config.discordPrefix}server (game|discord)\``,
      `\`${config.discordPrefix}ping\``,
      `\`${config.discordPrefix}punishments\``,
      `\`${config.discordPrefix}leaderboard (xp|kills)\``
      `\`${config.discordPrefix}deaths\``
    ].join('\n'), true);
    embed.addField('Links', [
      '[Play with friends](https://discord.gg/PtjsaW9)',
      `[Invite the bot](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=281664)`,
      '[Warzone's website](https://warz.one)
      '[Creator\'s website](https://jlz.fun)'
], true);
    embed.setFooter('Copyright 2018 © Daniel Gulic (jellz)');
    msg.channel.send({ embed });
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'ping')) {
    msg.channel.send('Pong!');
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'punishments')) {
    try {
      let response = await fetch(config.apiUrl + '/mc/punishment/latest?limit=10');
      let punishments = await response.json();
      let punMsg = [];
      var punType;
      punishments.forEach(punishment => {
        if (!punishment.punisherLoaded) punishment.punisherLoaded = { name: 'Console' };
        time = new Date(punishment.issued).toString().split(' ')[4];
        punishment.type.toLowerCase() === 'warn' ? punType = 'warned' : punType;
        punishment.type.toLowerCase() === 'mute' ? punType = 'muted' : punType;
        punishment.type.toLowerCase() === 'ban' ? punType = 'banned' : punType;
        punishment.type.toLowerCase() === 'kick' ? punType = 'kicked' : punType;
        punMsg.push(`🔹 \`${time}\` **${punishment.punisherLoaded.name}** ${punType} **${punishment.punishedLoaded.name}** for **${punishment.reason}**`);
      });
      let embed = new MessageEmbed();
      embed.setTitle(`10 most recent punishments on Warzone`);
      embed.setColor('RED');
      embed.setDescription(punMsg.join('\n'));
      msg.channel.send({ embed });
    } catch(err) {
      msg.channel.send('An error occurred.\n\n\n```js\n' + err + '```');
    }
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'deaths')) {
    try {
      let response = await fetch(config.apiUrl + '/mc/death/latest');
      let deaths = await response.json();
      var deathMsg = [];
      deaths.forEach(death => {
        if (!death.killerLoaded) death.killerLoaded = { name: 'Environment' };
        time = new Date(death.date).toString().split(' ')[4];
        deathMsg.push(`🔹 \`${time}\` **${death.killerLoaded.name}** killed **${death.playerLoaded.name}** with **${death.killerItem}**`);
      });
      let embed = new MessageEmbed();
      embed.setTitle(`4 most recent deaths on Warzone`);
      embed.setColor('RED');
      embed.setDescription(deathMsg.join('\n'));
      embed.setFooter('Due to API limitations, I can only display up to 4 recent deaths :(');
      msg.channel.send({ embed });
    } catch(err) {
      msg.channel.send('An error occurred.\n\n\n```js\n' + err + '```');
    }
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'server')) {
    if (args[0].toLowerCase() == 'discord') {
      if (!msg.guild) return msg.author.send('You must use this command in a Discord server.');
      let embed = new MessageEmbed();
      embed.setTitle('Discord server information');
      embed.addField('Name', msg.guild.name, true);
      embed.addField('ID', msg.guild.id, true);
      embed.addField('Members', msg.guild.memberCount, true);
      embed.addField('Verification level', msg.guild.verificationLevel, true);
      embed.addField('Channels', msg.guild.channels.size, true);
      embed.addField('Roles',  msg.guild.roles.size, true);
      embed.addField('Owner', msg.guild.owner.user.tag, true);
      embed.addField('Region', msg.guild.region, true);
      embed.addField('Emojis', msg.guild.emojis.size);
      embed.setThumbnail(msg.guild.iconURL());
      embed.setColor('RED');
      msg.channel.send({ embed });
    } else if (args[0].toLowerCase() == 'game') {
      let response = await fetch(config.apiUrl + '/mc/server/stats', { method: 'POST', body: JSON.stringify({ name: 'Warzone' }), headers: { 'Content-Type': 'application/json' } });
      let info = await response.json();
      let embed = new MessageEmbed();
      embed.addField('IP', 'play.warz.one', true);
      embed.addField('Name', info.name, true);
      embed.addField('MOTD', info.motd, true);
      embed.addField(`Players (${info.playerCount} / ${info.maxPlayers})`, info.players.length > 0 ? info.players.join(', ') : 'No players online')
      embed.setTitle('Minecraft server information');
      embed.setColor('RED');
      msg.channel.send({ embed });
    }
  } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'eval')) {
    if (!config.evalers.includes(msg.author.id)) return;
    try {
      let code = args.join(' ');
      let evaled = eval(code);
      if (typeof evaled !== 'string') {
        evaled = require('util').inspect(evaled);
      }
      msg.channel.send(clean(evaled), { code:'xl' });
    } catch (err) {
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

var getNumberEmoji = (place) => {
  switch (place) {
    case 1:
      return ':one:';
    case 2:
      return ':two:';
    case 3:
      return ':three:';
    case 4:
      return ':four:';
    case 5:
      return ':five:';
    case 6:
      return ':six:';
    case 7:
      return ':seven:';
    case 8:
      return ':eight:';
    case 9:
      return ':nine:';
    case 10:
      return ':keycap_ten:';
    default:
      return ':question:';
  }
}

var getPlayerRanks = async (playerName) => {
  let response = await fetch(config.apiUrl + `/mc/player/${playerName}/ranks`);
  let playerRankList = await response.json();
  return playerRankList;
}

var clean = (text) => {
  if (typeof(text) === 'string') {
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
  } else {
      return text;
  }
}
