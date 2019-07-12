require('dotenv').config();
const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
var deployed = new Boolean(false);
var started = new Boolean(false);
var rangers = [];
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    if (message.content === '!patrol') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
        message.channel.send("Listen up, rangers. We need a team to get us intel on a recently discovered NVA compound. Who's in?");
        message.channel.send("Enter :regional_indicator_j: to join");
        started = true;
    }

    if (message.content === 'end patrol' && started)
    {
        message.channel.send("Shows over folks!");
        started = false;
    }

    // If ranger joins team
    if (message.content === 'j' && started || message.content === 'J' && started) {
        
        rangers.push(message.author.tag);
        message.channel.send(message.author.username + " has volunteered!");
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
