import fetch, { RequestInit } from 'node-fetch';

const API_BASE = process.env.API_BASE || 'https://api.warzone.network';
const requestOptions: RequestInit = {
	headers: {
		'User-Agent': 'Warzone Stats/2.0 (https://github.com/jellz/warzone-stats)',
	},
};

export const getLeaderboard = async (stat: LeaderboardStatistic) => {
	const res = await fetch(API_BASE + '/mc/leaderboard/' + stat, requestOptions);
	const json: PlayerResponse[] = await res.json();
	return json.map(player => new Player(player));
};

export const getLatestPunishments = async () => {
	const res = await fetch(
		API_BASE + '/mc/punishment/latest?limit=10',
		requestOptions
	);
	const json: PunishmentResponse[] = await res.json();
	return json.map(pun => new Punishment(pun));
};

export const getPlayer = async (name: string) => {
	const res = await fetch(
		`${API_BASE}/mc/player/${name}?simple=true`,
		requestOptions
	);
	const json: { user?: PlayerResponse; notFound?: boolean } = await res.json();
	if (json.notFound || !json.user) return null;
	return new Player(json.user);
};

export const getServer = async (name: string) => {
	const res = await fetch(API_BASE + '/mc/server/' + name, requestOptions);
	const json: ServerResponse & { error?: string } = await res.json();
	if (json.error) return null;
	return new Server(json);
};

export class Server {
	id: string;
	serverId: string;
	name: string;
	motd: string;
	players: string[];
	playerCount: number;
	spectatorCount: number;
	maxPlayers: number;
	lastOnlineDate: Date;
	map: string;
	gameType: string;
	ip?: string;

	constructor(json: ServerResponse) {
		this.id = json._id;
		this.serverId = json.id;
		this.name = json.name;
		this.motd = json.motd;
		this.players = json.players;
		this.playerCount = json.playerCount;
		this.spectatorCount = json.spectatorCount;
		this.maxPlayers = json.maxPlayers;
		this.lastOnlineDate = new Date(json.lastOnline);
		this.map = json.map;
		this.gameType = json.gametype;
		this.ip = serverIps[this.serverId];
	}
}

const serverIps: { [key: string]: string } = {
	warzone: 'play.warz.one',
	infected: 'infected.warz.one',
};

export class Punishment {
	id: string;
	punishedId: string;
	punished: Player;
	ipBan: boolean;
	type: string;
	issued: Date;
	expires: Date;
	reason: string;
	reverted: boolean;
	active: boolean;

	constructor(json: PunishmentResponse) {
		this.id = json._id;
		this.punishedId = json.punished;
		this.ipBan = json.ip_ban;
		this.type = json.type;
		this.issued = new Date(json.issued);
		this.expires = new Date(json.expires);
		this.reason = json.reason;
		this.reverted = json.reverted;
		this.active = json.active;
		this.punished = new Player(json.punishedLoaded);
	}
}

export class Player {
	id: string;
	name: string;
	nameLower: string;
	uuid: string;
	initialJoinDate: Date;
	lastOnlineDate: Date;
	deaths: number;
	kills: number;
	wins: number;
	matches: number;
	losses: number;
	woolDestroys: number;
	activeTag: string | null;
	punishments: never[];
	tags: string[];
	ranks: string[];
	level: number;
	levelRaw: number;
	xp: number;

	wlr: number;
	kdr: number;

	constructor(json: PlayerResponse) {
		this.id = json._id;
		this.name = json.name;
		this.nameLower = json.nameLower;
		this.uuid = json.uuid;
		this.initialJoinDate = new Date(json.initialJoinDate);
		this.lastOnlineDate = new Date(json.lastOnlineDate);
		this.deaths = json.deaths ?? 0;
		this.kills = json.kills ?? 0;
		this.wins = json.wins ?? 0;
		this.matches = json.matches ?? 0;
		this.losses = json.losses ?? 0;
		this.woolDestroys = json.wool_destroys ?? 0;
		this.activeTag = json.activeTag || null;
		this.punishments = [];
		this.tags = json.tags;
		this.ranks = json.ranks;
		this.level = json.level;
		this.levelRaw = json.levelRaw;
		this.xp = json.xp;

		const wlr = Number((this.wins / this.losses).toFixed(2));
		this.wlr = isFinite(wlr) ? wlr : 0;

		const kdr = Number((this.kills / this.deaths).toFixed(2));
		this.kdr = isFinite(kdr) ? kdr : 0;
	}

	async getRanks() {
		const res = await fetch(`${API_BASE}/mc/player/${this.name}/ranks`);
		const json: RankResponse[] | { notFound?: boolean } = await res.json();
		if (!Array.isArray(json))
			throw `Trying to fetch ranks for non-existent player '${this.name}'`;
		return json.map(rank => new Rank(rank));
	}
}

export class Rank {
	id: string;
	name: string;
	priority: number;
	prefix: string;
	staff: boolean;
	display: string;
	permissions: string[];

	constructor(json: RankResponse) {
		this.id = json._id;
		this.name = json.name;
		this.priority = json.priority;
		this.prefix = json.prefix;
		this.staff = json.staff;
		this.display = json.display;
		this.permissions = json.permissions;
	}
}

export enum LeaderboardStatistic {
	Kills = 'kills',
	Wins = 'wins',
	Losses = 'losses',
	Xp = 'xp',
}

interface RankResponse {
	_id: string;
	name: string;
	priority: number;
	prefix: string;
	staff: boolean;
	__v: number;
	display: string;
	permissions: string[];
}

interface ServerResponse {
	_id: string;
	id: string;
	name: string;
	motd: string;
	players: string[];
	playerCount: number;
	spectatorCount: number;
	maxPlayers: number;
	lastOnline: number;
	map: string;
	gametype: string;
}

interface PlayerResponse {
	_id: string;
	name: string;
	nameLower: string;
	uuid: string;
	initialJoinDate: number;
	lastOnlineDate: number;
	__v: number;
	deaths?: number;
	kills?: number;
	wins?: number;
	matches?: number;
	losses?: number;
	wool_destroys?: number;
	activeTag?: string | null;
	punishments: PunishmentResponse[];
	tags: string[];
	ranks: string[];
	level: number;
	levelRaw: number;
	xp: number;
}

interface PunishmentResponse {
	_id: string;
	punished: string;
	ip_ban: boolean;
	type: string;
	issued: number;
	expires: number;
	reason: string;
	reverted: boolean;
	__v: number;
	active: boolean;
	punishedLoaded: PlayerResponse;
}
