import { Attachment, AttachmentBuilder, Client, GatewayIntentBits, Message, MessagePayload } from 'discord.js';
import dotenv from 'dotenv';
import { isValidHttpUrl } from './services/link_check.js';
import QRCode from 'qrcode';

const DEFAULT_PREFIX = "qr";

// ENV Configuration
dotenv.config();

// Create new Discord client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Ready! Logged in as: ${client.user.tag}`);
});

client.on('messageCreate', message => {
	if (message.author.bot) return;

	const [prefix, main_command, level_3, level_4, ...props] = message.content.split(' ');

	if (prefix !== DEFAULT_PREFIX) return;

	switch (main_command) {
		case "create":
			switch(level_3){
				case "url":
					const link = level_4;

					if(isValidHttpUrl(link)){
						QRCode.toDataURL(link, {width: 1000},  function(err, base64Code) {
							if(err) return;

							const [url_type, base64] = base64Code.split(',');
							const sfbuff = new Buffer.from(base64, "base64");
							const file = new AttachmentBuilder(sfbuff);

							message.reply({content: "Here is your QR code", files: [file]});

						})
						
					} else {
						message.reply('The link is in invalid form.');
						message.react('❌');
					}
					
					break;
				
				default:
					message.reply(`The command is invalid. To creatr qr, type '${DEFAULT_PREFIX} create url [link]'`);
					break;
			}
			break;
	}
})

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);