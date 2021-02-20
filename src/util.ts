import { Util } from 'discord.js';

export const escapeAndStripColours = (str: string) =>
	Util.escapeMarkdown(str).replace(/&[0-9A-FK-OR-x]/gi, '');
