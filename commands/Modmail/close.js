module.exports.run = async (client, message, args) => {

    const topic = message.channel.topic.split(/ +/g);
    const logsChannel = message.guild.channels.cache.get(client.config.modmail.logsChannel);
    if(topic[0] !== "modmail") return message.channel.sendErrorMessage('Please type this command in a modmail channel.');
    if(topic[1]){
        const member = await message.guild.members.fetch(`${topic[1]}`);
        if(!member) message.channel.sendErrorMessage('Please type this command in a modmail channel.');
        
        member.send(`Request processed by an administrator. Thank you for using ${client.user.username}, the ${message.guild.name} relay bot. For a new request, do not hesitate to contact me again.`);
        message.channel.delete()
        const date = new Date()
        const now = ((date.getDate() < 10) ? "0"+date.getDate() : date.getDate())+"/"+((date.getMonth() < 10) ? "0"+date.getMonth() : date.getMonth())+"/"+date.getFullYear()
        const hour = date.getHours()+":"+date.getMinutes()        
        logsChannel.send(`A new request has been processed:\nRequest by ${message.channel.name}\nProcessed by ${message.author.username}#${message.author.discriminator}\nOn ${now} at ${hour}`)
    }
}
module.exports.help = {
    
    name : 'close',
    aliases : ['close'],
    category : 'modmail',
    description : 'Close modmail discution.',
    cooldown : 3,
    usage : '',
    exemple :[],
    permissions : true,
    isUserAdmin: false,
    args : false,
    sousCommdandes : []
}