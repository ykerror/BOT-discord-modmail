module.exports = ()=>{
        const {STATUS,MESSAGESTATUS} = require('./../config.js');
        console.log(`${client.user.username} is online!`);
        client.user.setStatus(STATUS);
        client.user.setActivity(MESSAGESTATUS)
         
        console.log('BOT démarer avec succès')
    
}