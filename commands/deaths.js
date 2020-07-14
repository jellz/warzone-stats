var { Client, MessageEmbed } = require('discord.js');
var config = require('../config.json');
var fetch = require('node-fetch');

module.exports.run = async (client, msg, args) => {
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
    embed.setTitle(`4 most recent deaths on ${config.servername}`);
    embed.setColor('RED');
    embed.setDescription(deathMsg.join('\n'));
    embed.setFooter('Due to API limitations, only 4 deaths can be displayed.');
    msg.channel.send({ embed });
  } catch (err) {
    msg.channel.send('An error occurred.\n\n\n```js\n' + err + '```');
  }
};

module.exports.help = {
  name: "deaths",
  description: "Test command.",
  usage: "deaths"
};
