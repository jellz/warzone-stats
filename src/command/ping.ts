import { Command, CommandRun, Context } from 'dabf';

export class PingCommand extends Command {
	id = 'ping';
	aliases = ['ping'];

	@CommandRun()
	run($: Context) {
		$.message.channel.send('🏓');
	}
}
