const { MessageEmbed } = require('discord.js') 

module.exports = {
    name: 'membercount', 
    description: "Counts members in this server",
    execute(message, args){
        
        const members = message.guild.members.cache;

        const embed = new MessageEmbed()
        .setTitle(message.guild.iconURL, message.guild.name)
        .setDescription(`There are ${members.size} members in ${message.guild.name}`)
        .setFooter(message.guild.iconURL())
        .setTimestamp(Date.now())
        message.channel.send(embed);
    }
}