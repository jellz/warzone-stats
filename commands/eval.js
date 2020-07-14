var { Client, MessageEmbed } = require('discord.js');

module.exports.run = async (client, msg, args) => {
  if (!config.evalers.includes(msg.author.id)) return;

  try {
    let code = args.join(' ');
    let evaled = eval(code);
    if (typeof evaled !== 'string') {
      evaled = require('util').inspect(evaled);
    }
    msg.channel.send(clean(evaled), { code: 'xl' });
  } catch (err) {
    msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};

var clean = text => {
	if (typeof text === 'string') {
		return text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203));
	} else {
		return text;
	}
};

module.exports.help = {
  name: "eval",
  description: "Evaluation Command.",
  usage: "eval"
};
