import { Command, CommandRun, Context } from 'dabf';
import { getLatestPunishments } from '../api';
import humanize from 'humanize-duration';
import { MessageEmbed, Util } from 'discord.js';
import { LOADING_REACTION } from '..';

export class PunishmentsCommand extends Command {
	id = 'punishments';
	aliases = ['punishments', 'puns'];

	@CommandRun()
	async run($: Context) {
		const reaction = await $.message.react(LOADING_REACTION);

		const punishments = await getLatestPunishments();
		const formatted = punishments.map(pun => {
			const type = punTypeMap[pun.type.toLowerCase()];

			const time = pun.issued.toString().split(' ')[4];
			const duration = getDurationString(pun.expires, pun.issued);
			const name = Util.escapeMarkdown(pun.punished.name);
			const reason = Util.escapeMarkdown(pun.reason);

			return `${type.emoji} \`${time}\` **${name}** ${
				type.verb
			} for **${reason}** ${duration ? `(${duration})` : ''}`;
		});

		const embed = new MessageEmbed()
			.setTitle('Latest punishments')
			.setColor('RED')
			.setDescription(formatted.join('\n'));

		reaction.remove();
		$.message.channel.send({ embed });
	}
}

const punTypeMap: { [key: string]: { verb: string; emoji: string } } = {
	ban: {
		verb: 'banned',
		emoji: ':hammer:',
	},
	mute: { verb: 'muted', emoji: ':no_mouth:' },
	kick: { verb: 'kicked', emoji: ':boot:' },
	warn: { verb: 'warned', emoji: ':warning:' },
};

const getDurationString = (expires: Date, issued: Date) => {
	if (expires.getTime() === -1) return 'permanent';
	const length = expires.getTime() - issued.getTime();
	if (length === 0) return null; // Instant punishment (i.e. kick, warn)
	return humanize(length, { largest: 1 });
};
