const Discord = require("discord.js");
const bot = new Discord.Client();
const app = require('express')();
const server = require('http').createServer(app);
const prefix = '!!';



bot.login(process.env.TOKEN);

// ***************************************************************************************************
// ======================================= AU LANCEMENT DU BOT =======================================
// ***************************************************************************************************
bot.on("ready", () => {
    bot.user.setPresence({
        activity: {
            name: 'MP moi pour de l\'aide !'
        }
    });
    channelSite = bot.channels.cache.get("689860605003432039");
})

// ***************************************************************************************************
// =============================================== LOGS ==============================================
// ***************************************************************************************************
/*bot.on('guildBanAdd', user => {
    
    bot.guilds.cache.get("675374925527252993").channels.cache.get('689423212681232460').send("**" + user.tag +"** vient de nous quitter. A bientôt l'ami !");
});
*/
// ***************************************************************************************************
// ======================================= NOUVEL UTILISATEUR ========================================
// ***************************************************************************************************
/*
bot.on('guildMemberAdd', member => {
    
    NewUser = member.user;
    let attention = bot.emojis.cache.find(emoji => emoji.name === "attention");
    member.guild.channels.cache.get('688411985347477538').send("Salut "+"<@" + NewUser + ">" +`, bienvenue sur le serveur communautaire de la French Gaming Family ! 🤗 🎉\r\n\r\n__**N'oublie pas d'aller dans le channel <#517883101469343785> pour choisir ton support et les jeux auxquels tu joues afin de faire apparaître les différents salons.**__💪💪\r\n\r\n__**${attention}Tu ne pourras pas écrire avant d'avoir choisi tes jeux et supports !**__\r\n\r\n`); 
    member.user.send("Test");

});
*/
// ***************************************************************************************************
// ================================== UTILISATEUR QUITTE LE SERVEUR ==================================
// ***************************************************************************************************
/*
bot.on('guildMemberRemove', member => {
    
    user = member.user
    member.guild.channels.cache.get('697507654410567741').send("**" + user.tag +"** vient de nous quitter. A bientôt l'ami !");
});
*/
// ***************************************************************************************************
// =================================== A LA RECEPTION D'UN MESSAGE ===================================
// ***************************************************************************************************
bot.on("message", function(message) {
    
    bot.user.setPresence({
        activity: {
            name: 'MP moi pour de l\'aide !'
        }
    });
    // ***************************************************************************************************
	// ============================================= PUBLIC ==============================================
    // ***************************************************************************************************
          if(!message.author.bot) {
            if(message.content===prefix+"insta"){
                message.reply('Voici le lien de notre Instagram : https://twitter.com/FGamingFamily?s=09');
            }
            if(message.content===prefix+"fb"){
                message.reply('Voici le lien de notre Facebook : https://www.facebook.com/FrenchGamingFamily/');
            }
            if(message.content===prefix+"twitter"){
                message.reply('Voici le lien de notre twitter : https://twitter.com/FGamingFamily?s=09');
            }
            if(message.content===prefix+"commandes"){
                let g4 = bot.emojis.cache.find(emoji => emoji.name === "g4");
                message.reply(`Voici les commandes enregistrer :\r\n ${g4} **${prefix}spiritus** Donne le liste des commandes du BOT\r\n ${g4} **${prefix}fb** Donne le lien de notre page facebook \r\n ${g4} **${prefix}twitter** Donne le lien de notre page twitter\r\n ${g4} **${prefix}insta** Donne le lien de notre page instagram\r\n ${g4} **${prefix}utip** Donne le lien de notre page utip`);          
            }
            if(message.content===prefix+"avatar"){
                message.reply(message.author.displayAvatarURL());
            }
            if(message.content==="!guilem"){
                let bon = bot.emojis.cache.find(emoji => emoji.name === "bon");
                message.channel.send('<@345943442817286146> : miam miam les couilles de noval sont délicieuses !')
                message.channel.send(`${bon}`)

            }
            if(message.content===prefix+"ping"){
                let debut = Date.now();
                message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now()-debut}ms`));
            }
            if(message.content===prefix+"pileouface"){
                var nombreAleatoire = Math.round(Math.random()*1);
                 //console.log(nombreAleatoire);
                var reponse;
                if(nombreAleatoire == 1){
                message.channel.send("pile")
                } else {
                message.channel.send("face")
                }
            }
            
            if(message.content===prefix+'dés'){
                function entierAleatoire(min, max)
                {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                //Utilisation
                //La variable contient un nombre aléatoire compris entre 1 et 10
                var entier = entierAleatoire(1, 10);
                message.reply(entier)
            }
          }
              

    
    // ***************************************************************************************************
	// ====================================== ENVOI D'UN MP AU BOT =======================================
	// ***************************************************************************************************
    switch(message.channel.type) {
        case "dm":
            
            if(!message.author.bot) { // Si l'auteur du message n'est pas un bot

                var server = bot.guilds.cache.get("675374925527252993");
                var name = message.author.username+"#"+message.author.discriminator;
                var channelName = message.author.username+message.author.discriminator;
                var user = bot.guilds.cache.get("675374925527252993").members.cache.get(message.author.id)
                var category = server.channels.cache.get('695593316041097247')
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
                                let role = chan.guild.roles.cache.get('675415572703346693')
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

                    var channel = bot.channels.cache.get(chanId)
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
                
                if(message.member.roles.cache.get('675415572703346693')) { // Si l'utilisateur est bien admin

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
                        case prefix+"r":

                            var oldMessage;

                            message.channel.messages.fetch()
                            .then(msgs => {

                                let role = message.channel.guild.roles.cache.get('675415572703346693')

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

                                            bot.users.cache.get(userId).send(newMessage)
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

                                    bot.users.cache.get(userId).send(newMessage)
                                }

                                
                            })
                            .catch(console.error);



                            break;

                        // ---------------------------------- COMMANDES CLOSE -----------------------------------------
                        case prefix+"close":
                            
                            if(message.channel.parent == bot.guilds.cache.get("675374925527252993").channels.cache.get('695593316041097247')){
                                
                                var oldMessage;
                                var usr
                                let date = new Date()
                                var now = ((date.getDate() < 10) ? "0"+date.getDate() : date.getDate())+"/"+((date.getMonth() < 10) ? "0"+date.getMonth() : date.getMonth())+"/"+date.getFullYear()
                                var hour = date.getHours()+":"+date.getMinutes()
                                message.channel.messages.fetch()
                                .then(msgs => {

                                    let role = message.channel.guild.roles.cache.get('675415572703346693')

                                    if(!msgs.last().mentions.has(role)) {

                                        msgs.last().delete().then(m => {

                                            message.channel.messages.fetch()
                                            .then(messages => {
                                                oldMessage = messages.last().content
                                                var messageArray = oldMessage.split("{")
                                                var messArray = messageArray[1].split("}")
                                                var userId = messArray[0]
                                                var user = bot.users.cache.get(userId)
                                                var newContentArray = messages.last().content.split(":")
                                                newContentArray.shift()
                                                newContentArray.shift()
                                                var newContent = newContentArray.join(":")

                                                bot.users.cache.get(userId).send("Demande traitée par un administrateur. Merci d'avoir fait appel à Spiritus, le bot relai de la FGF.\r\nPour une nouvelle requête, n'hésitez pas à  contacter de nouveau Spiritus.").then(msg => {
                                                    bot.guilds.cache.get("675374925527252993").channels.cache.get('697507654410567741').send("@here Une nouvelle demande à été traitée :"+"\r\n**Demande de : **"+user.tag+"\r\n**Traitée par : **"+message.author.username+"\r\n**Contenu : **"+newContent+"\r\n**Le : **"+now+"\r\n**À : **"+hour).then(m => {
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
                                        var user = bot.users.cache.get(userId)
                                        var newContentArray = msgs.last().content.split(":")
                                        newContentArray.shift()
                                        newContentArray.shift()
                                        var newContent = newContentArray.join(":")

                                        bot.users.cache.get(userId).send("Demande traitée par un administrateur. Merci d'avoir fait appel à Spiritus, le bot relai de la FGF.\r\nPour une nouvelle requête, n'hésitez pas à  contacter de nouveau Spiritus.").then(msg => {
                                            bot.guilds.cache.get("675374925527252993").channels.cache.get('697507654410567741').send("@here Une nouvelle demande à été traitée :"+"\r\n**Demande de : **"+user.tag+"\r\n**Traitée par : **"+message.author.username+"\r\n**Contenu : **"+newContent+"\r\n**Le : **"+now+"\r\n**À : **"+hour).then(m => {
                                                message.channel.delete()
                                            })
                                        })
                                        .catch(console.error);
                                    }

                                })
                                .catch(console.error);
                            }

                            break;

                        // ---------------------------------- COMMANDES M -----------------------------------------
                        case prefix+"m":

                            //console.log(message)

                            if(typeof message.mentions.channels.first() === 'undefined') {

                                if(typeof message.mentions.users.first() !== 'undefined') {

                                    let user = message.mentions.users.first()
                                    let arrayMsg = message.content.split(/ +/g)
                                    arrayMsg.shift()
                                    arrayMsg.shift()
                                    let content = arrayMsg.join(" ")
                                    user.send("**Message de l'administration : **"+content).then(msg => {
                                        message.delete()
                                    })
                                    .catch(console.error);
                                }
                            } else {
                                
                                let attachments = message.attachments
                                let channel = message.mentions.channels.first()
                                
                                if(attachments) {
                                    
                                    let arrayMsg = message.content.split(/ +/g)
                                    
                                    if(arrayMsg.length > 2) {
                                        
                                        arrayMsg.shift()
                                        arrayMsg.shift()
                                        let content = arrayMsg.join(" ")
                                        channel.send(content, message.attachments.first()).then(msg => {
                                            message.delete()
                                        })
                                        .catch(console.error);
                                    } else {
                                        
                                        channel.send("", message.attachments.first()).then(msg => {
                                            message.delete()
                                        })
                                        .catch(console.error);
                                    }
                                    
                                    
                                } else {
                                    
                                    let arrayMsg = message.content.split(/ +/g)
                                    arrayMsg.shift()
                                    arrayMsg.shift()
                                    let content = arrayMsg.join(" ")
                                    channel.send(content).then(msg => {
                                        message.delete()
                                    })
                                    .catch(console.error);
                                }

                            }



                            break;
                        
                        // ---------------------------------- COMMANDES SPIRITUS -----------------------------------------
                        case prefix+"spiritus":
                            message.reply(`Voici mes commandes :\r\n\r\n **${prefix}aide**\r\nLa liste des commandes du BOT\r\n\r\n **${prefix}m @User#0000 message **\r\nPour envoyer un message privé à une personne \r\n\r\n **!m #chanel message**\r\n Pour poster un message au nom du BOT dans un salon du serveur \r\n\r\n** ${prefix}r message** \r\n Pour répondre à un message depuis le salon où se trouve la demande. \r\n\r\n **${prefix}close** \r\nPour  supprimer le salon que le BOT avait créé et clore la demande.\r\n\r\n **${prefix}add @User#0000 @role ** \r\nPour ajouter un role a une personne\r\n\r\n **${prefix}rem @User#0000 @role ** \r\nPour supprimer le role d\'une personne.`);
                            break;
                        
                        
                        // ---------------------------------- COMMANDES ADD (ROLES) -----------------------------------------  
                        case prefix+"add":
                            
                            let memberAdd
                            let roleAdd
                            
                            if(typeof message.mentions.members.first() !== "undefined") {
                                
                                memberAdd = bot.guilds.cache.get("675374925527252993").members.cache.get(message.mentions.members.first().id)
                                message.delete()
                                let check2 = bot.emojis.cache.find(emoji => emoji.name === "check2");
                                 let utilisateur = message.mentions.members.first()
                                 let rolea = message.mentions.roles.first()
                                 message.channel
                                 .send(`${check2}J\'ai bien mis a jour le role ${rolea} de ${utilisateur} `)
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
                            
                            break;
                        
                        // ---------------------------------- COMMANDES REM (ROLES) ----------------------------------------- 
                        case prefix+"rem":
                            
                            let memberRem
                            let roleRem
                            
                            if(typeof message.mentions.members.first() !== "undefined") {
                                memberRem = bot.guilds.cache.get("675374925527252993").members.cache.get(message.mentions.members.first().id)
                                message.delete()
                                let check2 = bot.emojis.cache.find(emoji => emoji.name === "check2");
                                 let utilisateur = message.mentions.members.first()
                                 let rolea = message.mentions.roles.first()
                                 message.channel
                                 .send(`${check2}J\'ai bien retiré le role ${rolea} de ${utilisateur} `)
                                 .then(m => {
                                    setTimeout(function() {
                                      m.delete()
                                    }, 5000)
                                  })
                                if(typeof message.mentions.roles.first() !== "undefined") {
                                    roleRem = message.mentions.roles.first()
                                    
                                    memberRem.roles.remove(roleRem).catch(console.error)
                                }
                            }
                            
                            break;
                    }
                    break;
                }
            }
            
            
            
    }
})

server.listen(8080);