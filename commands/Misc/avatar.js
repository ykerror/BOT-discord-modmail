const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message) => {
    let imageLink;
    if(message.mentions.members.first()) imageLink = message.mentions.members.first().user.displayAvatarURL()
    else imageLink = message.author.displayAvatarURL()
    const embed = new MessageEmbed()
    .setTitle("Avatar")
    .setImage(imageLink)
    .setColor("#a9c5e2")
    .setTimestamp()
    
    message.channel.send(embed)
}
module.exports.help = {
    
    name : 'avatar',
    aliases : ['avatar'],
    category : 'misc',
    description : 'Show your avatar or that of a member.',
    cooldown : 3,
    usage : '<@user>',
    exemple :['avatar @Smaug'],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : []
}