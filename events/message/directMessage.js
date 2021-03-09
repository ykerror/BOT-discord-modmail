module.exports = async(client, message) => {
    if(!client.config.modmail.active) return;
    const server = client.guilds.cache.get(client.config.modmail.guildId);
    const category = server.channels.cache.get(client.config.modmail.categoryId);

    let exists = false;
    let channelServer;

    const member = await server.members.fetch(`${message.author.id}`)
    const channelName = `${member.user.username}#${member.user.discriminator}`.slice(0,30)
    server.channels.cache.forEach(channel => {
        if(channel.topic){
            const splitTopic = channel.topic.split(/ +/g)
            if(splitTopic[1] && splitTopic[1] === member.user.id){
               exists = true
               channelServer = channel
            }
        }
    });
    if(exists && channelServer){
        return channelServer.send(`**${member.user.username}#${member.user.discriminator} :** ${message.content}`)
    } else {
        server.channels.create(channelName,{
            reason : "Modmail bot",
            topic : `modmail ${member.user.id}`,
            parent : category
        })
        .then(channelCreate =>{
            channelCreate.send(`New request from ${member.user.username}#${member.user.discriminator} (${member.id}) :\n${message.content}`)
        })
        .catch(console.error)
    }
}