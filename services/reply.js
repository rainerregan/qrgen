const { EmbedBuilder, Message } = require("discord.js");
const { getDefaultPrefix } = require("../configs/prefix");

/**
 * Reply to help command
 * @param {Message} message 
 */
const replyHelp = function (message) {
    const embed = new EmbedBuilder()
        .setTitle('QRGen')
        .setDescription('Discord bot for generating QR codes.')
        .addFields(
            {
                name: "Prefix",
                value: `${getDefaultPrefix()}`
            },
            {
                name: "Commands List:",
                value: `
                    \`${getDefaultPrefix()} create url YOUR_LINK'\` = Generating QR code from URL.
                `
            }
        );

    message.channel.send({ embeds: [embed] });
}

/**
 * Reply to about command.
 * @param {Message} message 
 */
const replyAbout = function (message) {

}

module.exports = {
    replyHelp: replyHelp
}