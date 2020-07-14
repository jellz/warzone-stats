var { Client, MessageEmbed } = require('discord.js');
var fetch = require('node-fetch');
var config = require('../config.json');

module.exports.run = async (client, msg, args) => {
  try {
    let response = await fetch(
      config.apiUrl + '/mc/punishment/latest?limit=10'
    );
    let punishments = await response.json();
    let punMsg = [];
    var punType;

    punishments.forEach(punishment => {
      if (!punishment.punisherLoaded) punishment.punisherLoaded = { name: 'Console' };
      time = new Date(punishment.issued).toString().split(' ')[4];
      const difference = punishment.expires - punishment.issued;
      let duration;
      if (difference === 0) duration = null;
      else if (punishment.expires === -1) duration = 'permanent';
      else duration = humanize(punishment.expires - punishment.issued, { largest: 1, });
      punishment.type.toLowerCase() === 'warn'
        ? (punType = 'warned')
        : punType;
      punishment.type.toLowerCase() === 'mute'
        ? (punType = 'muted')
        : punType;
      punishment.type.toLowerCase() === 'ban'
        ? (punType = 'banned')
        : punType;
      punishment.type.toLowerCase() === 'kick'
        ? (punType = 'kicked')
        : punType;
      punMsg.push(
        `🔹 \`${time}\` **${
          punishment.punishedLoaded.name
        }** was ${punType} for **${punishment.reason}** ${
          duration ? '(' + duration + ')' : ''
        }`
      );
    });

    let embed = new MessageEmbed();
    embed.setTitle(`10 most recent punishments on ${config.servername}`);
    embed.setColor('RED');
    embed.setDescription(punMsg.join('\n'));
    msg.channel.send({ embed });
  } catch (err) {
    msg.channel.send('An error occurred.\n\n\n```js\n' + err + '```');
  }
};

module.exports.help = {
  name: "punishments",
  description: "Display the last 10 recet punishments.",
  usage: "punishments"
};
