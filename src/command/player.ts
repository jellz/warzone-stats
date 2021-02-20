import { Command, CommandRun, Context } from 'dabf';
import { MessageEmbed, Util } from 'discord.js';
import { Player } from '../api';
import ago from 's-ago';
import { escapeAndStripColours } from '../util';

export class PlayerCommand extends Command {
	id = 'player';
	aliases = ['player', 'stats'];

	@CommandRun()
	async run($: Context, player: Player) {
		const loadingReaction = $.message.reactions.cache.find(r =>
			r.users.cache.has(r.client.user!.id)
		);

		const ranks = await player.getRanks();
		const sorted = ranks.sort((a, b) => b.priority - a.priority);
		const colour =
			rankColours[
				sorted.filter(rank => rankColours[rank.name] !== undefined)[0].name
			];

		const embed = new MessageEmbed()
			.setTitle(Util.escapeMarkdown(player.name))
			.setColor(colour)
			.setThumbnail(`https://crafatar.com/avatars/${player.uuid}`)
			.setFooter(`UUID: ${player.uuid}`)
			.setURL(
				`${process.env.WEBSITE_BASE || 'https://warzone.network'}/p/${
					player.name
				}`
			)
			.addFields([
				{ name: 'Kills', value: player.kills, inline: true },
				{ name: 'Deaths', value: player.deaths, inline: true },
				{ name: 'K/D', value: player.kdr, inline: true },
				{ name: 'Wins', value: player.wins, inline: true },
				{ name: 'Losses', value: player.losses, inline: true },
				{ name: 'W/L', value: player.wlr, inline: true },
				{ name: 'Level', value: player.level, inline: true },
				{ name: 'Matches', value: player.matches, inline: true },
				{ name: 'Destroyed wool', value: player.woolDestroys, inline: true },
				{ name: '\u200B', value: '\u200B' },
				{
					name: 'First joined',
					value: `${player.initialJoinDate.toUTCString()} (${ago(
						player.initialJoinDate
					)})`,
					inline: true,
				},
				{
					name: 'Last joined',
					value: `${player.lastOnlineDate.toUTCString()} (${ago(
						player.lastOnlineDate
					)})`,
					inline: true,
				},
				{ name: '\u200B', value: '\u200B' },
				{
					name: 'Ranks',
					value:
						ranks.length > 0
							? ranks
									.map(
										rank =>
											rank.display ||
											rank.name[0].toUpperCase() + rank.name.substring(1)
									)
									.join('\n')
							: 'None',
					inline: true,
				},
				{
					name: 'Tags',
					value:
						player.tags.length > 0
							? player.tags
									.map(tag =>
										tag === player.activeTag
											? `\`${escapeAndStripColours(tag)}\` ✅`
											: `\`${escapeAndStripColours(tag)}\``
									)
									.join('\n')
							: '*None*',
					inline: true,
				},
			]);

		if (loadingReaction) loadingReaction.remove();
		$.message.channel.send({ embed });
	}
}

const rankColours: { [key: string]: string } = {
	default: 'GREYPLE',
	vip: '#55FF55',
	'vip+': '#55FFFF',
	'vip++': '#00AAAA',
	jrmod: '#FFFF55',
	events: '#FF55FF',
	mod: '#FFFF55',
	srmod: '#FFAA00',
	jrdev: '#FF5555',
	developer: '#FF5555',
	admin: '#FF5555',
	russia: '#5555FF',
	china: '#FFAA00',
	rockin: '#AA00AA',
};
