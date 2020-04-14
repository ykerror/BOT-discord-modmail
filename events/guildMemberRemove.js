module.exports = (client, member)=>{

    client.on('guildMemberRemove', member => {
        
        user = member.user
        member.guild.channels.cache.get(departChanel).send("**" + user.tag +"** vient de nous quitter. A bientôt l'ami ! :wave:");
    });

}