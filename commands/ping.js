var { Client, MessageEmbed } = require('discord.js');

module.exports.run = async (client, msg, args) => {
  msg.channel.send('Pong!');
};

module.exports.help = {
  name: "ping",
  description: "Test command.",
  usage: "ping"
};
