const Discord = require('discord.js');

const client = new Discord.Client();
var deployed = new Boolean(false);
var started = new Boolean(false);
var rangers = [];
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '/start') {
        message.reply("Listen up, rangers. We need a team to get us intel on a recently discovered NVA compound. Who's in? (type /j to join)");
        started = true;
    }

    if (message.content === '/j' && started) {
        
        message.reply("thanks, " + message.author.username);

    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
