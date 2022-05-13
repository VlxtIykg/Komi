import { Client, Intents, Message } from 'discord.js';
import config from './config.json' assert { type: "json" };

const client = new Client({
    intents: [
     Intents.FLAGS.GUILDS,   
     Intents.FLAGS.GUILD_MESSAGES, 
     Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

client.on('ready', () => {
    console.log("Bot is ready?")
});

client.on('messageCreate', msg => {
    if(!msg.content.startsWith(config.prefix) || msg.author.bot) 
        return;
    
    const args = msg.content.slice(config.prefix.length).split(/\s+/);
    const command = args.shift().toLowerCase();
    
    if(command == "hi") {
        msg.channel.send("Hello World!");
    } else if(command == "goodbye") {
        msg.channel.send("Goodbye, Mars!");
    }
    else {
        msg.channel.send("Wha?")
    }
});
client.login(config.token);