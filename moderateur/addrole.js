module.exports = (client)=>{
    const adminId ='675415572703346693'
    const idServeur = '675374925527252993'
    const prefix = '!'

client.on("message", function(message) {
        if(message.content.startsWith(prefix+'add')){
        if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin

        let memberAdd
        let roleAdd
        
        if(typeof message.mentions.members.first() !== "undefined") {
            
            memberAdd = client.guilds.cache.get(idServeur).members.cache.get(message.mentions.members.first().id)
            message.delete()
            let check2 = client.emojis.cache.find(emoji => emoji.name === "check2");
             let utilisateur = message.mentions.members.first()
             let rolea = message.mentions.roles.first()
             message.channel
             .send(`${check2}J\ai bien mis a jour le role ${rolea} de ${utilisateur} `)
             .then(m => {
                setTimeout(function() {
                  m.delete()
                }, 5000)
              })
            if(typeof message.mentions.roles.first() !== "undefined") {
                roleAdd = message.mentions.roles.first()
                
                memberAdd.roles.add(roleAdd).catch(console.error)
            }
        }
    }
}
});

}
