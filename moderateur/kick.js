
module.exports = (client)=>{
    const adminId ='675415572703346693'
    const Discord =require('discord.js');
    const channellogs = '697507654410567741'

    const prefix = '$'

        client.on("message", function(message) {
            if(!message.author.bot){       
                if (message.content.startsWith("$kick")) {
                    if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin
                        if(typeof message.mentions.members.first() !== "undefined"){
                                let user = message.mentions.users.first()
                                let arrayMsg = message.content.split(/ +/g)
                                arrayMsg.shift()
                                arrayMsg.shift()
                                let content = arrayMsg.join(" ")
                                user.send("**KICK : **\r\nSuite au non-respect du règlement la sanction kick a été prise a votre encontre :\r\n\r\nModérateur :"+message.author.tag+"\r\n\r\nRaison :\r\n"+content).then(msg => {
                                message.delete()
                                })
                                var member= message.mentions.members.first();
                                member.kick().then((member) => {
                                    const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle('[KICK]')
                                .setURL('https://discordapp.com/channels/502528973012467723/679739057684742160')
                                .setAuthor('Module de modération', 'https://french-gaming-family.fr/public/spiritusavatar.png')
                                .setDescription('__**Raison du KICK :**__\r\n'+content)
                                .setThumbnail(user.displayAvatarURL())
                                .setTimestamp()
                                .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/logo.png');
                            
                                message.guild.channels.cache.get(channellogs).send(exampleEmbed);
                                }).catch(() => {
                                    message.channel.send("Une erreur s'est produite  :(\r\n Merci de réessayer");
                                });
                        }else{
                            message.reply('Vous n\'avez pas mentionner de personne a kick :cry:')
                        }
                    }
                }

            }
        })
    
}
