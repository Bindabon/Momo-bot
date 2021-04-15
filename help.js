const util = require("../util");

const unlisted = ["eval", "source"];

module.exports = {
    name: "help",
    aliases: ["commands", "?"],
    exec: (msg) => {
        const commands = msg.client.commands
            .filter(c => !unlisted.includes(c.name))
            .map(c => `\`${c.name}\``);

        const embed = util.embed()
            .setAuthor("Command List", msg.client.user.displayAvatarURL())
			.setTitle('Click here to invite Rose bot to your server')
	        .setURL('https://discord.com/oauth2/authorize?client_id=428900318852546560&scope=bot&permissions=66186303')
			.setImage('https://cdn.discordapp.com/attachments/760364973423067201/783461272099618866/ezgif-1-53ba8b3b5fdc.gif')
        	.addFields(
		{ name: 'Please remember!', value: 'The prefix is `%` like `%play song name`' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Rose bot invite link:', value: '[To invite Rosé 💕 music bot to your server click here](https://discord.com/oauth2/authorize?client_id=428900318852546560&scope=bot&permissions=66186303)', inline: true },
		{ name: 'Rosé 💕 support server', value: 'https://discord.gg/kpop', inline: true },
		{ name: 'ADD friend owner of bot if you need help', value: '[click here to add friend owner of bot](https://discord.com/users/574290999489069057)', inline: true },
	)
	        .setThumbnail(msg.author.avatarURL({dynamic : true}))
            .setDescription(commands.join(", "))
			.setFooter('Rose bot made by Candy', msg.client.user.displayAvatarURL())
            .setTimestamp();

        msg.channel.send(embed);
    }
};
