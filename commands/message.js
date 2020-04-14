module.exports = (client)=>{
    const adminId ='675415572703346693'
    const idServeur = '675374925527252993'
    const prefix = '!'

    client.on("message", function(message) {
                if(message.content.startsWith(prefix+'m')){
                    if(message.member.roles.cache.get(adminId)) { // Si l'utilisateur est bien admin

                    if(typeof message.mentions.channels.first() === 'undefined') {

                        if(typeof message.mentions.users.first() !== 'undefined') {

                            let user = message.mentions.users.first()
                            let arrayMsg = message.content.split(/ +/g)
                            arrayMsg.shift()
                            arrayMsg.shift()
                            let content = arrayMsg.join(" ")
                            user.send("**Message de l'administration : **"+content).then(msg => {
                                message.delete()
                            })
                            .catch(console.error);
                        }
                    } else {
                        
                        let attachments = message.attachments
                        let channel = message.mentions.channels.first()
                        
                        if(attachments) {
                            
                            let arrayMsg = message.content.split(/ +/g)
                            
                            if(arrayMsg.length > 2) {
                                
                                arrayMsg.shift()
                                arrayMsg.shift()
                                let content = arrayMsg.join(" ")
                                channel.send(content, message.attachments.first()).then(msg => {
                                    message.delete()
                                })
                                .catch(console.error);
                            } else {
                                
                                channel.send("", message.attachments.first()).then(msg => {
                                    message.delete()
                                })
                                .catch(console.error);
                            }
                            
                            
                        } else {
                            
                            let arrayMsg = message.content.split(/ +/g)
                            arrayMsg.shift()
                            arrayMsg.shift()
                            let content = arrayMsg.join(" ")
                            channel.send(content).then(msg => {
                                message.delete()
                            })
                            .catch(console.error);
                        }

                    }
                    }
                }
    });

}
