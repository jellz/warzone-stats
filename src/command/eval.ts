import { Command, CommandRun, Context } from 'dabf';
import { inspect } from 'util';

const evalers = process.env.EVALERS?.split(',') || <string[]>[];

export class EvalCommand extends Command {
	id = 'eval';
	aliases = ['eval'];

	@CommandRun()
	run($: Context, code: string) {
		if (!evalers.includes($.message.author.id)) return;
		try {
			let evaled = inspect(eval(code));
			console.log(evaled);
			$.message.channel.send(clean(evaled), { code: 'xl' });
		} catch (err) {
			console.log(err);
			$.message.channel.send(
				`\`ERROR\` \`\`\`xl\n${clean(err.toString())}\n\`\`\``
			);
		}
	}
}

const clean = (str: string) => {
	return str
		.replace(/`/g, '`' + String.fromCharCode(8203))
		.replace(/@/g, '@' + String.fromCharCode(8203));
};
