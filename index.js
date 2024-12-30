const owoify = require('owoify-js').default;
const { Client, GatewayIntentBits, Events} = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.login(token);

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) => {
    
    if(message.author === client.user) return;
    
    for (const link of ["https://", "http://", "www"]) {
        if (message.content.toLowerCase().includes(link)) return;
    }
    
    let randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber);
    
    if (randomNumber !== 1) return;
    
    message.reply(owoify(message.content));
    
});