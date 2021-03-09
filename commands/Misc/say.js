module.exports.run = async (client, message, args) => {

    message.channel.send(args.join(' '))
}
module.exports.help = {
    
    name : 'say',
    aliases : ['say'],
    category : 'misc',
    description : 'Send a message',
    cooldown : 3,
    usage : '<message>',
    exemple :['say hi'],
    permissions : false,
    isUserAdmin: false,
    args : true,
    sousCommdandes : []
}