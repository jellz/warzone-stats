var { Client, MessageEmbed } = require('discord.js');
var config = require('../config.json');

module.exports.run = async (client, msg, args) => {
  // if (msg.guild.id === '333669866735271938') {
		const staff = [];
		msg.guild.members.cache.forEach(m => {
			const roles = m.roles.cache.map(r => r.name.toLowerCase());
			if (!(m.presence.status === 'online' || m.presence.status === 'dnd')) return;
			if (roles.includes('moderator') || roles.includes('junior moderator')) staff.push(m);
			if (m.id === '142730862948122625' || m.id === '250536623270264833') staff.push(m);
		});

		if (staff.length < 1) return msg.reply('No online staff right now');
		msg.channel.send(`Online staff:\n\n${staff.map(s => s.toString()).join(', ')}`);
	// }
};

module.exports.help = {
  name: "staff",
  description: "Alert all staff members currently online.",
  usage: "staff"
};
