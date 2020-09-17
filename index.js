const Discord = require('discord.js');

const token = require('./token.json');

const client = new Discord.Client();

const fs = require('fs'); 

const prefix = 'c!';

client.commands = new Discord.Collection();

//getting the files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const commands = require(`./commands/${file}`); // bro u need an / here cuz its a folder. SEE. now just token sheet

    client.commands.set(commands.name, commands);
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'membercount'){
        client.commands.get('membercount').execute(message, args);
    }   else if(command == 'emojicount'){
        client.commands.get('emojicount').execute(message, args);
    }
    
 
    
});

client.login(token.token); 