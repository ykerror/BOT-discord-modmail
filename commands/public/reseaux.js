module.exports = (client)=>{
    const prefix = '!'

    client.on("message", function(message) {
        if(message.content===prefix+"insta"){
            message.reply('Voici le lien de notre Instagram : https://www.instagram.com/french_gaming_family/');
        }
        if(message.content===prefix+"fb"){
            message.reply('Voici le lien de notre Facebook : https://www.facebook.com/FrenchGamingFamily/');
        }
        if(message.content===prefix+"twitter"){
            message.reply('Voici le lien de notre twitter : https://twitter.com/FGamingFamily?s=09');
        }
        if(message.content===prefix+"utip"){
            message.reply('Voici le lien de notre utip : https://www.utip.io/fgfunited');
        }
        if(message.content===prefix+"youtube"){
            message.reply('Voici le lien de notre chaine youtube : https://www.youtube.com/channel/UCAKPauxXArnTWn9WuYldY-Q');
        }
    });
    
}
