
module.exports = (client)=>{
    const Discord =require('discord.js');
    let fleche = client.emojis.cache.find(emoji => emoji.name === "fleche");
    let g4 = client.emojis.cache.find(emoji => emoji.name === "g4");
    const prefix = '!'
    const adminId ='675415572703346693'


            client.on("message", function(message) {
                if(!message.author.bot){       
                    if(message.content===prefix+"commandes"){
                        if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin

                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#8bc34a')
                        .setTitle('[Commandes]')
                        .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
                        .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription(`__**Voici les commandes enregistrées :**__\r\n\r\n${fleche} **Les réseaux sociaux**\r\n \r\n${g4} **${prefix}fb** Donne le lien de notre page facebook\r\n${g4} **${prefix}twitter** Donne le lien de notre page twitter\r\n${g4} **${prefix}insta** Donne le lien de notre page insta\r\n${g4} **${prefix}utip** Donne le lien de notre page utip\r\n${g4} **${prefix}youtube** Donne le lien de notre chaine youtube\r\n\r\n\r\n${fleche} **Les commandes**\r\n \r\n${g4} **${prefix}avatar** montre votre avatar !\r\n${g4} **${prefix}pileouface** faites jouer le hasard !\r\n${g4} **${prefix}dés** lance un dés a 6 faces\r\n\r\n${fleche}**Les commandes d'administration :**\r\n\r\n${g4} **${prefix}m @User#0000 message **\r\n__Pour envoyer un message privé à une personne__ \r\n${g4} **!m #chanel message**\r\n__Pour poster un message au nom du BOT dans un salon du serveur__ \r\n${g4} **${prefix}r message** \r\n__Pour répondre à un message depuis le salon où se trouve la demande.__\r\n${g4}** ${prefix}close** \r\n__Pour  supprimer le salon que le BOT avait créé et clore la demande.__\r\n${g4}** ${prefix}add @User#0000 @role ** \r\n__Pour ajouter un role a une personne__\r\n${g4}** ${prefix}rem @User#0000 @role ** \r\n__Pour supprimer le role d\'une personne.__`)
                        //.setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');
                        message.channel.send(exampleEmbed)
                        }else{
                            const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#8bc34a')
                            .setTitle('[Commandes]')
                            .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
                            .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
                            .setDescription(`__**Voici les commandes enregistrées :**__\r\n\r\n${fleche} **Les réseaux sociaux**\r\n \r\n${g4} **${prefix}fb** Donne le lien de notre page facebook\r\n${g4} **${prefix}twitter** Donne le lien de notre page twitter\r\n${g4} **${prefix}insta** Donne le lien de notre page insta\r\n${g4} **${prefix}utip** Donne le lien de notre page utip\r\n${g4} **${prefix}youtube** Donne le lien de notre chaine youtube\r\n\r\n\r\n${fleche} **Les commandes**\r\n \r\n${g4} **${prefix}avatar** montre votre avatar !\r\n${g4} **${prefix}pileouface** faites jouer le hasard !\r\n${g4} **${prefix}dés** lance un dés a 6 faces`)
                            //.setThumbnail(user.displayAvatarURL())
                            .setTimestamp()
                            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');
                            message.channel.send(exampleEmbed) 
                        }

                    }
                }
            })
    
}

