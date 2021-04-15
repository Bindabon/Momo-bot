const util = require("../util");

module.exports = {
    name: "invite",
    aliases: ["link"],
    exec: (msg) => {
        msg.channel.send(util.embed().setDescription("💜💜 | [Click Here](https://discord.com/oauth2/authorize?client_id=428900318852546560&scope=bot&permissions=66186303) To invite Rose bot to your server💜💜"));
    }
};
