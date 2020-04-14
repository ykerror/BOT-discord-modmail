module.exports = (client)=>{
    client.on("message", function(message) {
        if(message.content==="!insta"){
            message.reply('Voici le lien de notre Instagram : https://www.instagram.com/french_gaming_family/');
        }
        if(message.content==="!fb"){
            message.reply('Voici le lien de notre Facebook : https://www.facebook.com/FrenchGamingFamily/');
        }
        if(message.content==="!twitter"){
            message.reply('Voici le lien de notre twitter : https://twitter.com/FGamingFamily?s=09');
        }
    });
    
}
