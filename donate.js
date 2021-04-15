const util = require("../util");

module.exports = {
    name: "donate",
    aliases: ["paypal"],
    exec: (msg) => {
        msg.channel.send(util.embed().setDescription("❤️❤️ | [Click here to donate](https://www.paypal.me/momotteu) help us to get better host for our bots thank you.❤️❤️ after donate Dm the [owner of bot](https://discord.com/users/574290999489069057)"));
    }
};
