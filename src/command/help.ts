import { Command, CommandRun, Context, DABFClient } from 'dabf';
import { CommandMetadata } from 'dabf/src/command/command';
import { MessageEmbed } from 'discord.js';

export class HelpCommand extends Command {
	id = 'help';
	aliases = ['help', 'about'];

	@CommandRun()
	run($: Context) {
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${$.message.client.user?.id}&permissions=8192&scope=bot`;
		const embed = new MessageEmbed()
			.setDescription(
				`Look up player stats and other Warzone-related info with ${$.message.client.user?.username}. You can [invite the bot to your own server](${inviteUrl}) or [check out the source code](https://github.com/jellz/warzone-stats).`
			)
			.setColor('RED');

		const { commandManager } = <DABFClient>$.message.client;
		const commands = commandManager.store.filter(c => c.id !== 'eval');
		const commandStrings: string[] = [];
		commands.forEach(cmd => {
			const { parameters }: CommandMetadata = commandManager.getMetadata(cmd);
			commandStrings.push(
				`\`${$.prefix}${cmd.aliases[0]}${parameters
					.filter(param => param.type !== Context)
					.map(
						param =>
							` ${param.optional ? '[' : '<'}${param.name.replace(
								/_/gi,
								' '
							)}:${param.type.name.toLowerCase()}${param.optional ? ']' : '>'}`
					)
					.join('')}\``
			);
		});
		embed.addField('Commands', commandStrings.join('\n'));

		$.message.channel.send({ embed });
	}
}
