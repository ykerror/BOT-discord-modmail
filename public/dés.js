module.exports = (client,message) => {
    const {PREFIX} =require('./../../config.js');

    const  Discord = require('discord.js')
        client.on("message", function(message) {
            if(message.content.startsWith(PREFIX+'roll')){
                let args = message.content.trim().split(/ +/g)
                let nb_dés = args[1]
                let count = args[2] 
                function entierAleatoire(min, max){
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                        }
                        //Utilisation
                        //La variable contient un nombre aléatoire compris entre 1 et le nombre choisis
                        let tableau = []
                        for(let i = 0; i< nb_dés; i++){
                            
                        var entier = entierAleatoire(1, count);
                        let a = 1 ;
                        
                        tableau.push('Lancé numero ' + (i+a) + ' a donner la valeur ' + entier + ' !')
                        }
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#4284f3')
                        .setTitle('[DÉS]')
                        .setAuthor('Module de jeu', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription(tableau)
                        .setImage('https://french-gaming-family.fr/public/dés.png')
                        //.setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/1585873893041.png');
                        message.channel.send(exampleEmbed)          
            }
           
        })
      
}

