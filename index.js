/*
 * Rewritten on Sat Dec 08 2018
 * Copyright (c) 2018 Daniel Gulic
 */

var { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
var fetch = require('node-fetch');
var humanize = require('humanize-duration');
var client = new Discord.Client({ disableEveryone: true });
var config = require('./config.json');
var fs = require('fs');

client.commands = new Discord.Collection();
client.login(config.discordToken);

// Reads all commands & boot them in.
fs.readdir('./commands', (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    console.log('Couldn\'t find commands.');
    return
  }

  jsfile.forEach((files, i) => {
    let props = require(`./commands/${files}`);
    console.log(`${files} has been loaded.`);
    client.commands.set(props.help.name, props);
  })
});

client.on('ready', async () => {
	console.log(`${client.user.tag} is ready!`);
	console.log(client.users.size);
	if (config.gameMessage == true) {
		await client.user.setActivity(
			`with about ${client.users.size} users (${config.discordPrefix}help)`
		);
		setInterval(() => {
			console.log(client.users.size);
			client.user.setActivity(
				`with about ${client.users.size} users (${config.discordPrefix}help)`
			);
		}, 60000 * 7);
	};
});

client.on('message', async msg => {
	if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let prefix = config.discordPrefix;
  let messageArray = msg.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!cmd.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(client, msg, args);













  if (
		msg.content.toLowerCase().startsWith(config.discordPrefix + 'punishments')
	) {
		try {
			let response = await fetch(
				config.apiUrl + '/mc/punishment/latest?limit=10'
			);
			let punishments = await response.json();
			let punMsg = [];
			var punType;
			punishments.forEach(punishment => {
				if (!punishment.punisherLoaded)
					punishment.punisherLoaded = { name: 'Console' };
				time = new Date(punishment.issued).toString().split(' ')[4];
				const difference = punishment.expires - punishment.issued;
				let duration;
				if (difference === 0) duration = null;
				else if (punishment.expires === -1) duration = 'permanent';
				else
					duration = humanize(punishment.expires - punishment.issued, {
						largest: 1,
					});
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
	} else if (
		msg.content.toLowerCase().startsWith(config.discordPrefix + 'deaths')
	) {
		try {
			let response = await fetch(config.apiUrl + '/mc/death/latest');
			let deaths = await response.json();
			var deathMsg = [];
			deaths.forEach(death => {
				if (!death.killerLoaded) death.killerLoaded = { name: 'Environment' };
				time = new Date(death.date).toString().split(' ')[4];
				deathMsg.push(
					`🔹 \`${time}\` **${death.killerLoaded.name}** killed **${death.playerLoaded.name}** with **${death.killerItem}**`
				);
			});
			let embed = new MessageEmbed();
			embed.setTitle(`4 most recent deaths on ${config.servername}`);
			embed.setColor('RED');
			embed.setDescription(deathMsg.join('\n'));
			embed.setFooter(
				'Due to API limitations, I can only display up to 4 recent deaths :('
			);
			msg.channel.send({ embed });
		} catch (err) {
			msg.channel.send('An error occurred.\n\n\n```js\n' + err + '```');
		}
	} else if (
		msg.content.toLowerCase().startsWith(config.discordPrefix + 'server')
	) {
		if (!args[0]) return msg.channel.send('You need to provide a server type');
		if (args[0].toLowerCase() == 'discord') {
			if (!msg.guild)
				return msg.author.send(
					'You must use this command in a Discord server.'
				);
			let embed = new MessageEmbed();
			embed.setTitle('Discord server information');
			embed.addField('Name', msg.guild.name, true);
			embed.addField('ID', msg.guild.id, true);
			embed.addField('Members', msg.guild.memberCount, true);
			embed.addField('Verification level', msg.guild.verificationLevel, true);
			embed.addField('Channels', msg.guild.channels.size, true);
			embed.addField('Roles', msg.guild.roles.size, true);
			embed.addField('Owner', msg.guild.owner.user.tag, true);
			embed.addField('Region', msg.guild.region, true);
			embed.addField('Emojis', msg.guild.emojis.size);
			embed.setThumbnail(msg.guild.iconURL());
			embed.setColor('RED');
			msg.channel.send({ embed });
		} else if (args[0].toLowerCase() == 'game') {
			const server = args[1] || 'warzone';
			let response = await fetch(config.apiUrl + '/mc/server/' + server);
			let info = await response.json();
			if (info.error)
				return msg.channel.send(
					"Couldn't fetch server information. Check the server name?"
				);
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
	} else if (
		msg.content.toLowerCase().startsWith(config.discordPrefix + 'eval')
	) {
		if (!config.evalers.includes(msg.author.id)) return;
		try {
			let code = args.join(' ');
			let evaled = eval(code);
			if (typeof evaled !== 'string') {
				evaled = require('util').inspect(evaled);
			}
			msg.channel.send(clean(evaled), { code: 'xl' });
		} catch (err) {
			msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}
});

const serverIps = {
	infected: 'infected.warz.one',
	warzone: 'play.warz.one',
};

var getPlayerRanks = async playerName => {
	let response = await fetch(config.apiUrl + `/mc/player/${playerName}/ranks`);
	let playerRankList = await response.json();
	return playerRankList;
};

var clean = text => {
	if (typeof text === 'string') {
		return text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203));
	} else {
		return text;
	}
};

const colourRegex = /&[0-9A-FK-OR]/gi;

var stripColoursFromTags = tags => {
	return tags.map(t => `\`${t.replace(colourRegex, '')}\``);
};
