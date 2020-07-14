var { Client, MessageEmbed } = require('discord.js');
var config = require('../config.json');
var fetch = require('node-fetch');

module.exports.run = async (client, msg, args) => {
  if (!args[0]) return msg.channel.send('You need to provide a server type. Avaliable options: game, discord.');

  if (args[0].toLowerCase() == 'discord') {
    if (!msg.guild) return msg.author.send('You must use this command in a Discord server.');

    let embed = new MessageEmbed();
    embed.setTitle('Discord server information');
    embed.addField('Name', msg.guild.name, true);
    embed.addField('ID', msg.guild.id, true);
    embed.addField('Members', msg.guild.memberCount, true);
    embed.addField('Verification level', msg.guild.verificationLevel, true);
    embed.addField('Channels', msg.guild.channels.cache.size, true);
    embed.addField('Roles', msg.guild.roles.cache.size, true);
    embed.addField('Owner', msg.guild.owner.user.tag, true);
    embed.addField('Region', msg.guild.region, true);
    embed.addField('Emojis', msg.guild.emojis.cache.size);
    embed.setThumbnail(msg.guild.iconURL());
    embed.setColor('RED');
    msg.channel.send({ embed });
  } else if (args[0].toLowerCase() == 'game') {
    const server = args[1] || config.apiid;
    let response = await fetch(config.apiUrl + '/mc/server/' + server);
    let info = await response.json();
    if (info.error) return msg.channel.send("Couldn't fetch server information. Check the server name?");

    let embed = new MessageEmbed();
    embed.addField('IP', serverIps[info.id] || `${config.serverip}`, true);
    embed.addField('Name', info.name, true);
    embed.addField('MOTD', info.motd, true);
    embed.addField('Map', info.map, true);
    embed.addField(
      `Players (${info.playerCount} / ${info.maxPlayers})`,
      info.players.length > 0 ? info.players.join(', ') : 'No players online'
    );
    embed.setTitle('Minecraft server information');
    embed.setColor('RED');
    msg.channel.send({ embed });
  }
};

const serverIps = {
	infected: 'infected.warz.one',
	warzone: 'play.warz.one',
};

module.exports.help = {
  name: "server",
  description: "Get Server information on both Discord and ingame.",
  usage: "server <game | discord>"
};
