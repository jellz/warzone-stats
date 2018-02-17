const { Client, MessageEmbed } = require('discord.js');
const snek = require('snekfetch');
const client = new Client({ disableEveryone: true });
const config = require('./config.json');
client.login(config.discordToken);

client.on('ready', async () => {
    console.log(client.user.tag + ' is ready. Made by Jellz (https://jellz.fun/).');
    client.user.setActivity(config.discordPrefix + `help | ${client.users.size} users!`);
});

client.on('message', async (msg) => {
    if (msg.author.bot || msg.author.id == client.user.id) return;
    const args = msg.content.slice(0).trim(config.discordPrefix.length).split(/ +/g);
    args.shift();
    
    if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'player')) {
        if (!args[0]) return msg.channel.send(`**Usage!** ${config.discordPrefix}player <playername>`);
        const response = await snek.get(config.apiURI + '/mc/player/' + args[0].toLowerCase());
        if (response.body['notFound']) return msg.channel.send('Invalid player.');
        const embed = new MessageEmbed();
        embed.setTitle(`${args[0]}'s Warzone statistics`);
        embed.setColor('RED');
        embed.setURL('https://warz.one/' + args[0]);
        embed.setDescription(`Displaying **${args[0]}**'s Warzone statistics.`);
        embed.addField('Kills', response.body.user['kills'] ? response.body.user['kills'] : '0', true);
        embed.addField('Deaths', response.body.user['deaths'] ? response.body.user['deaths'] : '0', true);
        embed.addField('Matches played', response.body.user['matches'] ? response.body.user['matches'].length : '0', true);
        embed.addField('First joined', new Date(response.body.user['initialJoinDate']).toUTCString(), true);
        embed.addField('Last joined', new Date(response.body.user['lastOnlineDate']).toUTCString(), true);
        embed.addField('Wins', response.body.user['wins'] ? response.body.user['wins'] : '0', true);
        embed.addField('Losses', response.body.user['losses'] ? response.body.user['losses'] : '0', true);
        msg.channel.send({ embed: embed });
    } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'leaderboard')) {
        const response = await snek.get(config.apiURI + '/mc/leaderboard/kills');
        const leaderboard = response.body;
        var count = 0;
        const lbMsg = [];
        leaderboard.slice(0, 10).forEach(player => {
            count++;
            if (count !== 11) {
                lbMsg.push(`**[#${count}]** | **${player.name}** with **${player.kills}** kills.`);
            }
        });
        const embed = new MessageEmbed();
        embed.setTitle(`Displaying Top 10 Warzone players based on Kills...`);
        embed.setColor('RED');
        embed.setURL('https://warz.one/leaderboard');
        embed.setDescription(lbMsg.join('\n'));
        msg.channel.send({ embed: embed });
    } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'help')) {
        const embed = new MessageEmbed();
        embed.setTitle('Displaying bot help');
        embed.setColor('RED');
        const helpMsg = [
            'This bot was made by Jellz#1337 to assist Warzone community members with viewing players\' statistics.',
            `Commands: \`${config.discordPrefix}help\` \`${config.discordPrefix}player <playername>\` \`${config.discordPrefix}leaderboard\``
            // 'If you would like to view Jellz\'s other projects, head over to [his website](https://jellz.fun/).'
        ].join('\n');
        embed.setDescription(helpMsg);
        msg.channel.send({ embed: embed });
    } else if (msg.content.toLowerCase().startsWith(config.discordPrefix + 'ping')) {
        msg.channel.send('Pong!');
    }
});

