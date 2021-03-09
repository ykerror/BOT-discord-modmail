module.exports.run = async (client, message, args) => {

    const topic = message.channel.topic.split(/ +/g)
    if(topic[0] !== "modmail") return message.channel.sendErrorMessage('Please type this command in a modmail channel.')
    if(topic[1]){
        const member = await message.guild.members.fetch(`${topic[1]}`)
        if(!member) message.channel.sendErrorMessage('Please type this command in a modmail channel.')
        
        member.send(`**Response from the ${message.guild.name} server administration :**\n${args.join(' ')}`)
        message.channel.send(`**${message.author.username}#${message.author.discriminator} :** ${args.join(' ')}`)
        message.delete()
    }
}
module.exports.help = {
    
    name : 'reply',
    aliases : ['reply'],
    category : 'modmail',
    description : 'Reply to a user.',
    cooldown : 3,
    usage : '<your message>',
    exemple :['reply Hi'],
    permissions : true,
    isUserAdmin: false,
    args : true,
    sousCommdandes : []
}