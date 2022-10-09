import { EmbedBuilder, Message } from "discord.js";
import { DEFAULT_PREFIX } from "../index.js";

/**
 * Reply to help command
 * @param {Message} message 
 */
export const replyHelp = function (message) {
    const embed = new EmbedBuilder()
        .setTitle('QRGen')
        .setDescription('Discord bot for generating QR codes.')
        .addFields(
            {
                name: "Prefix",
                value: DEFAULT_PREFIX
            },
            {
                name: "Commands List:",
                value: `
                    \`${DEFAULT_PREFIX} create url YOUR_LINK'\` = Generating QR code from URL.
                `
            }
        );

    message.channel.send({embeds: [embed]});
}

/**
 * Reply to about command.
 * @param {Message} message 
 */
export const replyAbout = function (message) {

}