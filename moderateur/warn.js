module.exports = (client,message) => {
    const prefix = '$'
    const Discord = require('discord.js')
    const adminId = '675415572703346693'
        client.on("message", function(message) {
            if(!message.author.bot) {

                if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin
            
                    if(message.content.startsWith(prefix+'warn')){
            
                        if(message.mentions.users.first() !== 'undefined') {
                            
                            let user = message.mentions.users.first()
                            let arrayMsg = message.content.split(/ +/g)
                            arrayMsg.shift()
                            arrayMsg.shift()
                            let content = arrayMsg.join(" ")
                            user.send("**AVERTISSEMENT : **\r\nSuite au non-respect du règlement la sanction avertissement a été prise a votre encontre :\r\n\r\nModérateur :"+message.author.tag+"\r\n\r\nRaison :\r\n"+content).then(msg => {
                                message.delete()
                            })
                            .catch(console.error);
                            const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle('[WARN]')
                            .setURL('https://discordapp.com/channels/502528973012467723/679739057684742160')
                            .setAuthor('Module de modération', 'https://french-gaming-family.fr/public/1584471129028.png')
                            .setDescription('__**Raison du warn :**__\r\n'+content)
                            .setThumbnail(user.displayAvatarURL())
                            .setTimestamp()
                            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');
                        
                            message.guild.channels.cache.get("695688539588919346").send(exampleEmbed);
                        }
                    }
                }
            }
            
        })
      
}

