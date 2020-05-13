module.exports = (client,message)=>{

// ***************************************************************************************************
// ======================================= AU LANCEMENT DU BOT =======================================
// ***************************************************************************************************

    /*const idServeur = '675374925527252993'
    const categorieDemandes ='695593316041097247'
    const logsDemandes ='697507654410567741'
    const adminId ='675415572703346693'
    const prefix ='!'*/
    const {SERVERID,CATEGORIEDEMANDES,LOGSDEMANDES,ADMINID,PREFIX} =require('./../config.js');


// ***************************************************************************************************
// =================================== A LA RECEPTION D'UN MESSAGE ===================================
// ***************************************************************************************************
client.on("message", function(message) {
    
   
   
    // ***************************************************************************************************
	// ====================================== ENVOI D'UN MP AU BOT =======================================
	// ***************************************************************************************************
    switch(message.channel.type) {
        case "dm":
            
            if(!message.author.bot) { // Si l'auteur du message n'est pas un bot

                var server = client.guilds.cache.get(SERVERID);
                var name = message.author.username+"#"+message.author.discriminator;
                var channelName = message.author.username+message.author.discriminator;
                var user = client.guilds.cache.get(SERVERID).members.cache.get(message.author.id)
                var category = server.channels.cache.get(CATEGORIEDEMANDES)
                var exists = false;
                var chanId;

                server.channels.cache.forEach(channel => { // On verifie chaque channel pour voir si il n'existe pas deja

                    if(channel.name == channelName.replace(/\s/g, '-').toLowerCase()) {
                        exists = true
                        chanId = channel.id
                    }
                })

                if(!exists) { // Si le channel n'existe pas on le crée

                    server.channels.create(channelName, { type: 'text' }).then(chan => {

                        if (!category) {
                            console.error
                        }

                        chan.setParent(category.id).then(e => { // On met le nouveau channel dans la bonne catégorie
                            
                            chan.updateOverwrite(chan.guild.roles.everyone, { VIEW_CHANNEL: false }).then(i => { // On interdit a tout le monde de voir le channel
                                let role = chan.guild.roles.cache.get(ADMINID)
                                let date = new Date()
                                let now = ((date.getDate() < 10) ? "0"+date.getDate() : date.getDate())+"/"+((date.getMonth() < 10) ? "0"+date.getMonth() : date.getMonth())+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes()
                                chan.send("<@&"+role.id+"> Nouvelle demande de {"+message.author.id+"} ** "+name+" ** le "+now+" :\r\n"+message.content)
                                message.reply("Votre demande a bien été envoyée. Nous la traiterons dans les plus brefs délais. Merci de votre patience.")
                            })
                            .catch(console.error);
                        })
                        .catch(console.error);

                    })
                    .catch(console.error);

                } else { // Si le channel existe deja on envoi simplement le nouveau message

                    var channel = client.channels.cache.get(chanId)
                    var last;

                    channel.messages.fetch()
                    .then(messages => {
                        server.channels.cache.get(chanId).send("**"+name+" :** "+message.content)
                    })
                    .catch(console.error);

                }
                
            }
            
            break;

        // ***************************************************************************************************
		// ====================================== ENVOI D'UNE COMMANDE =======================================
		// ***************************************************************************************************    
        case "text":
            
            if(!message.author.bot) { // Si l'utilisateur n'est pas un bot
                
                if(message.member.roles.cache.get(ADMINID)) { // Si l'utilisateur est bien admin

                    var name = "Admin";
                    const mess = message.content.split(/ +/g);
                    let command = mess[0]
                    var textArray = mess.shift()
                    var newMessage = mess.join(' ')

                    // ***************************************************************************************************
					// ================================== SWITCH GENERAL DES COMMANDES ===================================
					// ***************************************************************************************************
                    switch(command) {

                    	// ---------------------------------- COMMANDES R -----------------------------------------
                        case PREFIX+"r":

                            var oldMessage;

                            message.channel.messages.fetch()
                            .then(msgs => {

                                let role = message.channel.guild.roles.cache.get(ADMINID)

                                if(!msgs.last().mentions.has(role)) {

                                    msgs.last().delete().then(m => {

                                        message.channel.messages.fetch()
                                        .then(messages => {
                                            oldMessage = messages.last().content
                                            var messageArray = oldMessage.split("{")
                                            var messArray = messageArray[1].split("}")
                                            var userId = messArray[0]

                                            message.channel.send("**"+name+"** : "+newMessage)
                                            message.channel.messages.delete(messages.first())

                                            client.users.cache.get(userId).send(newMessage)
                                        })
                                        .catch(console.error);

                                    })
                                    .catch(console.error);
                                } else {
                                    oldMessage = msgs.last().content
                                    var messageArray = oldMessage.split("{")
                                    var messArray = messageArray[1].split("}")
                                    var userId = messArray[0]

                                    message.channel.send("**"+name+"** : "+newMessage)
                                    message.channel.messages.delete(msgs.first())

                                    client.users.cache.get(userId).send(newMessage)
                                }

                                
                            })
                            .catch(console.error);



                            break;

                        // ---------------------------------- COMMANDES CLOSE -----------------------------------------
                        case PREFIX+"close":
                            
                            if(message.channel.parent == client.guilds.cache.get(SERVERID).channels.cache.get(CATEGORIEDEMANDES)){
                                
                                var oldMessage;
                                var usr
                                let date = new Date()
                                var now = ((date.getDate() < 10) ? "0"+date.getDate() : date.getDate())+"/"+((date.getMonth() < 10) ? "0"+date.getMonth() : date.getMonth())+"/"+date.getFullYear()
                                var hour = date.getHours()+":"+date.getMinutes()
                                message.channel.messages.fetch()
                                .then(msgs => {

                                    let role = message.channel.guild.roles.cache.get(ADMINID)

                                    if(!msgs.last().mentions.has(role)) {

                                        msgs.last().delete().then(m => {

                                            message.channel.messages.fetch()
                                            .then(messages => {
                                                oldMessage = messages.last().content
                                                var messageArray = oldMessage.split("{")
                                                var messArray = messageArray[1].split("}")
                                                var userId = messArray[0]
                                                var user = client.users.cache.get(userId)
                                                var newContentArray = messages.last().content.split(":")
                                                newContentArray.shift()
                                                newContentArray.shift()
                                                var newContent = newContentArray.join(":")

                                                client.users.cache.get(userId).send("Demande traitée par un administrateur. Merci d'avoir fait appel à Spiritus, le bot relai de la FGF.\r\nPour une nouvelle requête, n'hésitez pas à  contacter de nouveau Spiritus.").then(msg => {
                                                    client.guilds.cache.get(SERVERID).channels.cache.get(LOGSDEMANDES).send("@here Une nouvelle demande à été traitée :"+"\r\n**Demande de : **"+user.tag+"\r\n**Traitée par : **"+message.author.username+"\r\n**Contenu : **"+newContent+"\r\n**Le : **"+now+"\r\n**À : **"+hour).then(m => {
                                                        message.channel.delete()
                                                    })
                                                    
                                                })
                                            })
                                            .catch(console.error);

                                        })
                                        .catch(console.error);
                                    } else {
                                        oldMessage = msgs.last().content
                                        var messageArray = oldMessage.split("{")
                                        var messArray = messageArray[1].split("}")
                                        var userId = messArray[0]
                                        var user = client.users.cache.get(userId)
                                        var newContentArray = msgs.last().content.split(":")
                                        newContentArray.shift()
                                        newContentArray.shift()
                                        var newContent = newContentArray.join(":")

                                        client.users.cache.get(userId).send("Demande traitée par un administrateur. Merci d'avoir fait appel à Spiritus, le bot relai de la FGF.\r\nPour une nouvelle requête, n'hésitez pas à  contacter de nouveau Spiritus.").then(msg => {
                                            client.guilds.cache.get(SERVERID).channels.cache.get(LOGSDEMANDES).send("@here Une nouvelle demande à été traitée :"+"\r\n**Demande de : **"+user.tag+"\r\n**Traitée par : **"+message.author.username+"\r\n**Contenu : **"+newContent+"\r\n**Le : **"+now+"\r\n**À : **"+hour).then(m => {
                                                message.channel.delete()
                                            })
                                        })
                                        .catch(console.error);
                                    }

                                })
                                .catch(console.error);
                            }

                            break;
                        
                    }
                    break;
                }
            }
            
            
            
    }
})

}