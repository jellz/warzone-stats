var { Client, MessageEmbed } = require('discord.js');
var config = require('../config.json');

module.exports.run = async (client, msg, args) => {
	let embed = new MessageEmbed();
	embed.setColor('RED');
	embed.setDescription(`View ${config.servername} player stats, punishments, leaderboards and server info with ${config.servername} Stats!`);
	embed.addField(
		'Commands',
		[
			`\`${config.discordPrefix}help\``,
			`\`${config.discordPrefix}player <playername>\``,
			`\`${config.discordPrefix}server (game|discord)\``,
			`\`${config.discordPrefix}ping\``,
			`\`${config.discordPrefix}punishments\``,
			`\`${config.discordPrefix}leaderboard (xp|kills|losses|wins)\``,
			`\`${config.discordPrefix}deaths\``,
		].join('\n'),
		true
	);
	embed.addField(
		'Links',
		[
			`[Play with friends](${config.serverdiscord})`,
			`[Invite the bot](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=281664)`,
			`[${config.servername}'s website](${config.serverwebsite})`,
			`[Bot Creator's website](https://jlz.fun)`,
		],
		true
	);
	embed.setFooter('Copyright 2018 © Daniel Gulic (jellz)');
	msg.channel.send({ embed });
};

module.exports.help = {
  name: "help",
  description: "A list of commands that are provided by the bot.",
  usage: "help"
};
