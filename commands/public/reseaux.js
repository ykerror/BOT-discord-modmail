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
    });
    
}
