import { Command, CommandRun, Context } from 'dabf';
import { GuildMember, User } from 'discord.js';
import { prisma } from '..';

let lastUsed: Date;
const staffRoles = process.env.STAFF_ROLES?.split(',') || [];
const exemptUsers = process.env.STAFF_PING_EXEMPT_USERS?.split(',') || [];

const isPingable = async (user: User) => {
	const pingList = (
		await prisma.userPreferences.findUnique({ where: { id: user.id } })
	)?.staffPingStatusesOverride || ['online'];

	console.log(pingList, user.presence.status);
	return pingList.includes(user.presence.status);
};

export class StaffCommand extends Command {
	id = 'staff';
	aliases = ['staff', 'hacker'];

	@CommandRun()
	async run($: Context) {
		if (!$.message.guild)
			return $.message.channel.send(
				':warning: This command can only be used in a server'
			);

		// Global five minute cooldown
		if (lastUsed && Date.now() - lastUsed.getTime() < 300000)
			return $.message.channel.send(
				':warning: This command has already been used recently'
			);

		const members = await $.message.guild.members.fetch({
			withPresences: true,
		});
		if (!members)
			return $.message.channel.send(':warning: Could not fetch members');

		const staff: GuildMember[] = [];

		for (const member of members.array()) {
			if (!member.roles.cache.some(role => staffRoles.includes(role.id)))
				continue; // Skip if member isn't staff
			if (exemptUsers.includes(member.id)) continue; // Skip if member is barred from being pinged
			if (!(await isPingable(member.user))) continue; // Skip if member's status is not on their Ping Me list

			staff.push(member);
		}

		if (staff.length === 0)
			return $.message.channel.send(
				'There are no moderation staff available at the moment, please try again later'
			);

		$.message.channel.send(
			`Pinging available staff: ${staff
				.map(member => member.toString())
				.join(' ')} (requested by ${$.message.author.tag})`
		);

		lastUsed = new Date();
	}
}
