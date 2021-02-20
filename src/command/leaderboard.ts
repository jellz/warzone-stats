import { Command, CommandRun, Context } from 'dabf';
import { MessageEmbed, Util } from 'discord.js';
import { LOADING_REACTION } from '..';
import { getLeaderboard, LeaderboardStatistic, Player } from '../api';

export class LeaderboardCommand extends Command {
	id = 'leaderboard';
	aliases = ['leaderboard', 'lb', 'lboard'];

	@CommandRun()
	async run($: Context, stat?: string) {
		stat = stat?.toLowerCase();

		const allowed = Object.keys(statAliases);
		if (!stat || !allowed.includes(stat))
			return $.message.channel.send(
				':crossed_swords: You need to choose one of the following stats: `kills`, `losses`, `wins`, `levels`'
			);

		const reaction = await $.message.react(LOADING_REACTION);

		const statistic = statAliases[stat];
		const leaderboard = await getLeaderboard(statistic);

		let position = 0;
		const formatted = leaderboard.slice(0, 10).map(player => {
			position++;

			const name = Util.escapeMarkdown(player.name);
			const statText = formatPlayerStat(statistic, player);

			return `${numberEmojiKey[position]} **${name}** (${statText})`;
		});

		const embed = new MessageEmbed()
			.setTitle(`Top 10 players (sorted by ${statistic.toLowerCase()})`)
			.setColor('RED')
			.setDescription(formatted.join('\n'));

		reaction.remove();
		$.message.channel.send({ embed });
	}
}

const formatPlayerStat = (stat: LeaderboardStatistic, player: Player) => {
	if (stat === LeaderboardStatistic.Kills) return `${player.kills} kills`;
	else if (stat === LeaderboardStatistic.Losses)
		return `${player.losses} losses`;
	else if (stat === LeaderboardStatistic.Wins) return `${player.wins} wins`;
	else if (stat === LeaderboardStatistic.Xp) return `level ${player.level}`;
};

const statAliases: { [key: string]: LeaderboardStatistic } = {
	kills: LeaderboardStatistic.Kills,
	kill: LeaderboardStatistic.Kills,
	k: LeaderboardStatistic.Kills,
	losses: LeaderboardStatistic.Losses,
	loss: LeaderboardStatistic.Losses,
	l: LeaderboardStatistic.Losses,
	wins: LeaderboardStatistic.Wins,
	win: LeaderboardStatistic.Wins,
	w: LeaderboardStatistic.Wins,
	levels: LeaderboardStatistic.Xp,
	level: LeaderboardStatistic.Xp,
	xp: LeaderboardStatistic.Xp,
};

const numberEmojiKey: { [key: number]: string } = {
	0: ':zero:',
	1: ':one:',
	2: ':two:',
	3: ':three:',
	4: ':four:',
	5: ':five:',
	6: ':six:',
	7: ':seven:',
	8: ':eight:',
	9: ':nine:',
	10: ':keycap_ten:',
};
