
module.exports = (client)=>{
    const adminId ='675415572703346693'

    const prefix = '!'

            client.on("message", function(message) {
                if(!message.author.bot){       
                if (message.content.startsWith("$ban")) {
                if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin

                    if(typeof message.mentions.members.first() !== "undefined"){

                    let user = message.mentions.users.first()
                    let arrayMsg = message.content.split(/ +/g)
                        arrayMsg.shift()
                        arrayMsg.shift()
                        let content = arrayMsg.join(" ")                    
                        var member= message.mentions.members.first();
                        user.send("**BAN : **\r\nSuite au non-respect du règlement la sanction ban a été prise a votre encontre :\r\n\r\nModérateur :"+message.author.tag+"\r\n\r\nRaison :\r\n"+content).then(msg => {
                            message.delete()
                        })  
                        var member= message.mentions.members.first();                          
                        member.ban().then((member) => {
                        // Successmessage
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('[BAN]')
                        .setURL('https://discordapp.com/channels/502528973012467723/679739057684742160')
                        .setAuthor('Module de modération', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription('__**Raison du BAN :**__\r\n'+content)
                        .setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');
                    
                        message.guild.channels.cache.get("695688539588919346").send(exampleEmbed);
                        }).catch(() => {
                         // Failmessage
                        message.channel.send("Access Denied");
                    });
                }else{
                    message.reply('Vous n\'avez pas mentionner de personne a ban :cry:')
                }
                }
                    
                }

                }
            })
    
}
