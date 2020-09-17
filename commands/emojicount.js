const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'emojicount',
    description: "calculates how many emojis are in this server",
    execute(message, args){

        const emojis = message.guild.emojis.cache;
        const allservers = guild.emojis.cache.get(guild.id)

        const embed = new MessageEmbed()
        .setTitle(`${message.guild.name}'s Roles Count`)
        .setDescription(`There are ${emojis.size} emojis in your added server.`)
        .setTimestamp(Date.now())
        message.channel.send(embed);
    }
}