module.exports = (client, member)=>{
        const Discord =require('discord.js');
        const {BYECHANNEL} =require('./../config.js');

        user = member.user

       // member.guild.channels.cache.get(departChanel).send("**" + user.tag +"** vient de nous quitter. A bientôt l'ami ! :wave:");

            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#4284f3')
            .setTitle('Member left')
            .setAuthor('Module d\'evenement', 'https://french-gaming-family.fr/public/spiritusavatar.png')
            .setDescription("**" + user.tag +"** vient de nous quitter. A bientôt l'ami ! :wave:")
            .setImage(user.displayAvatarURL())
            //.setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug et Tikad devellopers officiels du BOT', 'https://french-gaming-family.fr/public/logoFGF.png');
            member.guild.channels.cache.get(BYECHANNEL).send(exampleEmbed)
        
}