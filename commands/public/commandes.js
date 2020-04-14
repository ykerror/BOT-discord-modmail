
module.exports = (client)=>{
    const Discord =require('discord.js');
    const user = message.author
    let fleche = client.emojis.cache.find(emoji => emoji.name === "fleche");
    let g4 = client.emojis.cache.find(emoji => emoji.name === "g4");
    const prefix = '!'
    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#8bc34a')
                        .setTitle('[Commandes ]')
                        .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
                        .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription(`Voici les commandes enregistrer :\r\n 
                        ${fleche} **Les réseaux sociaux**\r\n 
                        ${g4} **${prefix}fb** Donne le lien de notre page facebook
                        ${g4} **${prefix}twitter** Donne le lien de notre page twitter
                        ${g4} **${prefix}insta** Donne le lien de notre page instagram
                        ${g4} **${prefix}utip** Donne le lien de notre page utip
                        ${g4} **${prefix}youtube** Donne le lien de notre chaine youtube
                        ${fleche} **Les commandes**\r\n 
                        ${g4} **${prefix}avatar** montre votre avatar au grand format
                        ${g4} **${prefix}pileouface** faites jouer le hasard !
                        ${g4} **${prefix}dés** lance un dés a 6 faces`)
                        .setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');


            client.on("message", function(message) {
                if(!message.author.bot){       
                    if(message.content===prefix+"commandes"){
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#8bc34a')
                        .setTitle('[Commandes ]')
                        .setURL('https://discordapp.com/channels/502528973012467723/502529309358161933')
                        .setAuthor('Module de commandes', 'https://french-gaming-family.fr/public/1584471129028.png')
                        .setDescription(`Voici les commandes enregistrer :\r\n 
                        ${fleche} **Les réseaux sociaux**\r\n 
                        ${g4} **${prefix}fb** Donne le lien de notre page facebook
                        ${g4} **${prefix}twitter** Donne le lien de notre page twitter
                        ${g4} **${prefix}insta** Donne le lien de notre page instagram
                        ${g4} **${prefix}utip** Donne le lien de notre page utip
                        ${g4} **${prefix}youtube** Donne le lien de notre chaine youtube
                        ${fleche} **Les commandes**\r\n 
                        ${g4} **${prefix}avatar** montre votre avatar au grand format
                        ${g4} **${prefix}pileouface** faites jouer le hasard !
                        ${g4} **${prefix}dés** lance un dés a 6 faces`)
                        //.setThumbnail(user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/imgA.png');
                        message.reply(exampleEmbed)

                    }
                }
            })
    
}