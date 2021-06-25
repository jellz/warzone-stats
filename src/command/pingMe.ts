import { Command, CommandRun, Context } from 'dabf';
import { MessageEmbed } from 'discord.js';
import { connection } from '..';
import { UserPreferences } from '../entity/userPreferences';

const allStatuses = ['Online', 'DND', 'Idle', 'Invisible'];
const staffRoles = process.env.STAFF_ROLES?.split(',') || [];

export class PingMeCommand extends Command {
	id = 'pingme';
	aliases = ['pingme'];

	@CommandRun()
	async run($: Context, action?: string, status?: string) {
		if (!$.message.member)
			return $.message.channel.send(
				':warning: This command can only be used in a server'
			);

		if (!$.message.member.roles.cache.some(r => staffRoles.includes(r.id)))
			return $.message.react('⛔');

		action = action?.toLowerCase();
		status = status?.toLowerCase();

		if (action && !['show', 'add', 'remove', 'rm'].includes(action))
			return $.message.channel.send(
				':question: Try **`show`**, **`add <status>`**, or **`remove <status>`**'
			);

		const userPreferences = connection.getRepository(UserPreferences);
		let pingMeStatuses = (await userPreferences.findOne($.message.author.id))
			?.staffPingStatusesOverride || ['online'];

		const embed = new MessageEmbed()
			.setTitle('Ping preferences')
			.setDescription([
				`You will be pinged when players use the \`${$.prefix}staff\` command if your status is in your Ping Me list. Try to keep your Ping Me list to statuses that you use when you're usually available to help players.`,
				'',
				'**Commands**',
				`• **\`${$.prefix}pingme show\`**`,
				`• **\`${$.prefix}pingme add <status>\`**`,
				`• **\`${$.prefix}pingme remove <status>\`**`,
				'',
				'`<status>` can be `Online`, `DND`, `Idle`, or `Invisible`',
			])
			.setColor($.message.member?.roles.highest.color);

		switch (action) {
			default:
			case 'show':
				const statuses = allStatuses.filter(s =>
					pingMeStatuses.includes(s.toLowerCase())
				);

				embed.addField(
					"Ping me when I'm",
					statuses.length > 0
						? statuses.join('\n')
						: '*(No statuses; never ping)*'
				);
				return $.message.channel.send(embed);

			case '+':
			case 'add':
				if (!status)
					return $.message.channel.send(
						':question: You need to include a status to add (`Online`, `DND`, `Idle`, or `Invisible`)'
					);

				if (!allStatuses.map(s => s.toLowerCase()).includes(status))
					return $.message.channel.send(
						':question: You can only add the following statuses: `Online`, `DND`, `Idle`, `Invisible`'
					);

				pingMeStatuses.push(status);
				pingMeStatuses = [...new Set(pingMeStatuses)];
				break;

			case '-':
			case 'rm':
			case 'remove':
				if (!status)
					return $.message.channel.send(
						':question: You need to include a status to remove (`Online`, `DND`, `Idle`, or `Invisible`)'
					);

				if (!allStatuses.map(s => s.toLowerCase()).includes(status))
					return $.message.channel.send(
						':question: You can only remove the following statuses: `Online`, `DND`, `Idle`, `Invisible`'
					);

				pingMeStatuses = pingMeStatuses.filter(
					(pingStatus: string) => pingStatus !== status
				);
				break;
		}

		const prefs = await userPreferences.findOne($.message.author.id);
		if (prefs)
			await userPreferences.update(prefs.id, {
				id: prefs.id,
				staffPingStatusesOverride: pingMeStatuses,
			});
		else
			await userPreferences.insert({
				id: $.message.author.id,
				staffPingStatusesOverride: pingMeStatuses,
			});

		await $.message.react('✅');
	}
}
