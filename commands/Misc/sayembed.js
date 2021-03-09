const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message, args) => {
    const texte = args.join(' ')
    const embed = new MessageEmbed()
    .setAuthor(`${message.author.username}`,`${message.author.displayAvatarURL()}`)
    .setColor("#a9c5e2")
    .setDescription(texte)
    .setTimestamp()
    .setFooter(`Module de la commande : Fun`)
    message.channel.send(embed)
}
module.exports.help = {
    
    name : 'sayembed',
    aliases : ['sayembed'],
    category : 'misc',
    description : 'Send a message in embed',
    cooldown : 3,
    usage : '<message>',
    exemple :['sayembed hi'],
    permissions : false,
    isUserAdmin: false,
    args : true,
    sousCommdandes : []
}