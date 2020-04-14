module.exports = (client)=>{
    const prefix = '!'
    client.on("message", function(message) {
        if(message.content ===  prefix+'ping') {
            message.reply('Test')
        }
    });
    
}
