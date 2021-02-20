import { Command, CommandRun, Context } from 'dabf';

let lastUsed: Date;
const staffRoles = process.env.STAFF_ROLES?.split(',') || [];
const exemptUsers = process.env.STAFF_PING_EXEMPT_USERS?.split(', ') || [];

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

		const staff = members
			.filter(member =>
				member.roles.cache.some(role => staffRoles.includes(role.id))
			)
			.filter(member => member.presence.status === 'online')
			.filter(member => !exemptUsers.includes(member.id));

		if (staff.size === 0)
			return $.message.channel.send('There are no staff online');

		$.message.channel.send(
			`Pinging online staff: ${staff
				.map(member => member.toString())
				.join(' ')} (requested by ${$.message.author.tag})`
		);
		lastUsed = new Date();
	}
}
