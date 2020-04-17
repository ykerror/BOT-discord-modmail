module.exports = (client)=>{
    const staffId ='675415572703346693'
    const Discord =require('discord.js');
    const channellogs = '697507654410567741'
    const prefix = '$'

        client.on("message", function(message) {
            if(!message.author.bot){

                    if(message.content.startsWith(prefix+'warn')){
                        if(message.member.roles.cache.get(staffId)) { // Si l'utilisateur est bien admin

                        if(message.mentions.users.first() !== 'undefined') {
                        
                        let user = message.mentions.users.first()
                        let arrayMsg = message.content.split(/ +/g)
                        arrayMsg.shift()
                        arrayMsg.shift()
                        let content = arrayMsg.join(" ")
                        let attention = client.emojis.cache.find(emoji => emoji.name === "attention");
                        user.send(`**__${attention}Avertissement de l'équipe de modération de la FGF :__**\r\n\r\nModérateur : L'equipe du staff \r\n\r\n**__Motif :__** \r\n`+content).then(msg => {
                            message.delete()
                        })
                        .catch(console.error);
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('[WARN]')
                        .setURL('https://discordapp.com/channels/502528973012467723/679739057684742160')
                        .setAuthor('Module de modération', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription('__**Raison du warn (warn d\'un staff) :**__\r\n'+content)
                        .setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');
                    
                        message.guild.channels.cache.get(channellogs).send(exampleEmbed);
                        }
                    }     
                }
            }
        })
}