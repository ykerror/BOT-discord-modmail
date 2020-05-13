module.exports = ()=>{
        const {STATUS,MESSAGESTATUS} = require('./../config.js');
        console.log(`${bot.user.username} is online!`);
        bot.user.setStatus(STATUS);
        bot.user.setActivity(MESSAGESTATUS)
         
        console.log('BOT démarer avec succès')
    
}