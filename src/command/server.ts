import { Command, CommandRun, Context } from 'dabf';
import { MessageEmbed } from 'discord.js';
import { LOADING_REACTION } from '..';
import { getServer } from '../api';
import { escapeAndStripColours } from '../util';

export class ServerCommand extends Command {
	id = 'server';
	aliases = ['server', 'srv'];

	@CommandRun()
	async run($: Context, platform?: string, server_name?: string) {
		platform = platform?.toLowerCase();
		if (!platform || !['game', 'mc', 'discord'].includes(platform))
			return $.message.channel.send(
				':warning: You need to choose one of the following platforms: `game`, `discord`'
			);

		const embed = new MessageEmbed();
		switch (platform) {
			case 'mc':
			case 'game':
				const reaction = await $.message.react(LOADING_REACTION);
				const server = await getServer(server_name?.toLowerCase() || 'warzone');
				if (!server) return $.message.channel.send(':warning: Invalid server');
				embed
					.setTitle(server.name)
					.setColor('RANDOM')
					.addFields([
						{ name: 'IP', value: server.ip || 'play.warz.one', inline: true },
						{
							name: 'MOTD',
							value: escapeAndStripColours(server.motd),
							inline: true,
						},
						{
							name: 'Currently Playing',
							value: `${server.map} (${server.gameType})`,
							inline: true,
						},
						{
							name: `Players (${server.players.length} / ${server.maxPlayers})`,
							value:
								server.players.length > 0
									? server.players.map(p => escapeAndStripColours(p)).join(', ')
									: 'No players online',
						},
					]);
				reaction.remove();
				break;
			case 'discord':
				const guild = $.message.guild;
				if (!guild)
					return $.message.channel.send(
						`:warning: This command can only be used in a server`
					);
				const emojis = guild.emojis.cache.map(e => e.toString());
				embed
					.setTitle(guild.name)
					.addFields([
						{ name: 'Name', value: guild.name, inline: true },
						{ name: 'Members', value: guild.memberCount, inline: true },
						{
							name: 'Channels',
							value: guild.channels.cache.size,
							inline: true,
						},
						{ name: 'Roles', value: guild.roles.cache.size, inline: true },
						{ name: 'Owner', value: guild.owner?.user.tag, inline: true },
						{
							name: 'Region',
							value: guild.region.toUpperCase().replace(/-/g, ' '),
							inline: true,
						},
						{
							name: 'Emojis',
							value: `${emojis.join(' ')} (${emojis.length})`,
							inline: true,
						},
					])
					.setColor('RANDOM');
				if (guild.icon) embed.setThumbnail(guild.iconURL()!);
				break;
		}

		$.message.channel.send({ embed });
	}
}
