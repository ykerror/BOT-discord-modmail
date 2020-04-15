module.exports = (client)=>{
    const prefix = '!'
    const Discord =require('discord.js');


    client.on("message", function(message) {
        if(message.content===prefix+"insta"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f8b301')
            .setTitle('[Réseaux sociaux]')
            .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
            .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
            .setDescription('Voici le lien de notre page instagram : \r\n  https://www.instagram.com/french_gaming_family ')
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/14.png');
            message.channel.send(exampleEmbed)
        }
        if(message.content===prefix+"fb"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f8b301')
            .setTitle('[Réseaux sociaux]')
            .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
            .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
            .setDescription('Voici le lien de notre page facebook : \r\n  https://www.facebook.com/FrenchGamingFamily ')
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/14.png');
            message.channel.send(exampleEmbed)  
        }
        if(message.content===prefix+"twitter"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f8b301')
            .setTitle('[Réseaux sociaux]')
            .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
            .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
            .setDescription('Voici le lien de notre page twitter : \r\n  https://twitter.com/FGamingFamily?s=09 ')
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/14.png');
            message.channel.send(exampleEmbed)    
        }
        if(message.content===prefix+"utip"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f8b301')
            .setTitle('[Soutiens :heart: ]')
            .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
            .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
            .setDescription('Voici le lien de notre utip  : \r\n  https://www.utip.io/fgfunited \r\n un grand merci a toi ce soutiens nous aide vraiment donc un grand merci pour cela ')
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/14.png');
            message.channel.send(exampleEmbed)  
        }
        if(message.content===prefix+"youtube"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f8b301')
            .setTitle('[Réseaux]')
            .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
            .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
            .setDescription('Voici le lien de notre utip  : \r\n  https://www.youtube.com/channel/UCAKPauxXArnTWn9WuYldY-Q ')
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/14.png');
            message.channel.send(exampleEmbed)  
        }
    });
    
}
