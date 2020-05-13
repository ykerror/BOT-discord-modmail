module.exports = (client,message) => {
    const {ADMINID,PREFIX} =require('./../config.js');

    //const prefix = '$'
        client.on("message", function(message) {
            if(!message.author.bot){
                if(message.content.startsWith(PREFIX+'clear')){
                    if(message.member.roles.cache.get(ADMINID)) { // Si l'utilisateur est bien admin

                        let args = message.content.trim().split(/ +/g)
                        let count = args[1]
                        //if(!count)return message.channel.send('Veuillez indiquer le nombre de message(s) a spprimer après la commande')
                        if(isNaN(count))return message.channel.send('Veuillez indiquer un nombre valide')
                        if(count < 1 || count > 100)return message.channel.send('Veuillez indiquer un nombre compris entre 0 et 100')
                        message.channel.bulkDelete(parseInt(count) + 1)
                    }
                  
                }
            } 
        })
        
}

