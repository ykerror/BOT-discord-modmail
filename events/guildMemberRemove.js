module.exports = (client, member)=>{


        const departChanel = '675374925527253002'
        user = member.user
        member.guild.channels.cache.get(departChanel).send("**" + user.tag +"** vient de nous quitter. A bientôt l'ami ! :wave:");
    

}