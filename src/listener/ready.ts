import { DABFClient, Listener } from 'dabf';

export class ReadyListener extends Listener {
	id = 'ready';
	event = 'ready';

	constructor(public client: DABFClient) {
		super();
	}

	run() {
		this.client.log.info(`Logged in as ${this.client.user?.tag}`);
	}
}
