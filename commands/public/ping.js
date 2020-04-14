module.exports = (client)=>{
    client.on("message", function(message) {
        if(message.content ===  '!ping') {
            message.reply('Test')
        }
    });
    
}
