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
});
