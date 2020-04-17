
module.exports = (client)=>{
    const Discord =require('discord.js');
    let g4 = client.emojis.cache.find(emoji => emoji.name === "g4");
    const prefix = '!'

            client.on("message", function(message) {
                if(!message.author.bot){       
                    if(message.content===prefix+"avatar"){
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#4284f3')
                        .setTitle('[Avatar]')
                        .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
                        .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/spiritusavatar.png')
                        .setDescription(`${g4}Voici votre avatar !`)
                        .setImage(message.author.displayAvatarURL())
                        //.setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/logoFGF.png');
                        message.channel.send(exampleEmbed)
                    }
                }
            })
    
}