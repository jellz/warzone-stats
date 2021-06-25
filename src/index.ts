import 'reflect-metadata';
import { config as configEnv } from 'dotenv';
configEnv();

import { Connection, createConnection } from 'typeorm';

import { Context, DABFClient } from 'dabf';
import { getPlayer, Player } from './api';
import { LeaderboardCommand } from './command/leaderboard';
import { PlayerCommand } from './command/player';
import { PunishmentsCommand } from './command/punishments';
import { PingCommand } from './command/ping';
import { ServerCommand } from './command/server';
import { StaffCommand } from './command/staff';
import { EvalCommand } from './command/eval';
import { HelpCommand } from './command/help';
import { PingMeCommand } from './command/pingMe';
import { ReadyListener } from './listener/ready';
import { UserPreferences } from './entity/userPreferences';

if (!process.env.DISCORD_TOKEN) throw 'Missing DISCORD_TOKEN env variable';
if (!process.env.LOADING_EMOJI) throw 'Missing LOADING_EMOJI env variable';
if (!process.env.DATABASE_URL) throw 'Missing DATABASE_URL env variable';

export let connection: Connection;
(async () => {
	connection = await createConnection({
		type: 'postgres',
		url: process.env.DATABASE_URL,
		synchronize: true,
		logging: true,
		entities: [UserPreferences],
	});
})();

const client = new DABFClient({}, { disableMentions: 'everyone' });

client.commandManager.setPrefix('!');

client.commandManager.addArgumentType(
	Player,
	async ($: Context, input?: string) => {
		if (!input) return null;

		const reaction = await $.message.react(LOADING_REACTION);

		const player = await getPlayer(input);
		if (!player) await reaction.remove();

		return player;
	}
);

client.listenerManager.register(new ReadyListener(client));

client.commandManager.register(new LeaderboardCommand());
client.commandManager.register(new PunishmentsCommand());
client.commandManager.register(new PlayerCommand());
client.commandManager.register(new PingCommand());
client.commandManager.register(new ServerCommand());
client.commandManager.register(new StaffCommand());
client.commandManager.register(new PingMeCommand());
client.commandManager.register(new EvalCommand());
client.commandManager.register(new HelpCommand());

client.login(process.env.DISCORD_TOKEN);

export const LOADING_REACTION = process.env.LOADING_EMOJI!.replace(/<|>/gi, '');
