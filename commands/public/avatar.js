
module.exports = (client)=>{
    const Discord =require('discord.js');
   // const user = message.author
    let fleche = client.emojis.cache.find(emoji => emoji.name === "fleche");
    let g4 = client.emojis.cache.find(emoji => emoji.name === "g4");
    const prefix = '!'

            client.on("message", function(message) {
                if(!message.author.bot){       
                    if(message.content===prefix+"avatar"){
                        if(typeof message.mentions.users.first() !== 'undefined') {
                            //let user_m = message.mentions.users.first()
                            message.reply(message.mentions.users.first().displayAvatarURL());

                        }
                        
                    }
                }
            })
    
}