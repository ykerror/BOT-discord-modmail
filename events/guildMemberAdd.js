module.exports = (client, member)=>{
        const {BIENVENUECHANNEL} =require('./../config.js');

        NewUser = member.user;
        let attention = client.emojis.cache.find(emoji => emoji.name === "attention");
        
        member.guild.channels.cache.get(BIENVENUECHANNEL).send("__Salut __"+"<@" + NewUser + ">" +`__, bienvenue sur le serveur communautaire de la French Gaming Family Dev ! 🤗__ 🎉\r\n\r\n __**N'oublie pas d'aller dans le channel <#685912863428313140> pour pouvoir vérifier l'actualité sur le serveur \r\n${attention} Si tu veux pouvoir rejoindre notre équipe de devs n'hésite pas a envoyer un message privé a <@611468402263064577> !**__\r\n\r\n`); 
        member.user.send("__Salut __"+"<@" + NewUser + ">" +`__, bienvenue sur le serveur communautaire de la French Family Dev ! 🤗__ 🎉\r\n\r\n __**N'oublie pas d'aller dans le channel <#685912863428313140> pour pouvoir vérifier l'actualité sur le serveur \r\n${attention} Si tu veux pouvoir rejoindre notre équipe de devs n'hésite pas a envoyer un message privé a Smaug !**__\r\n\r\n`);
}