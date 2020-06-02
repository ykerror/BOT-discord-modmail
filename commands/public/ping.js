module.exports = (client,message) => {
const {PREFIX} =require('./../../config.js');

    const prefix = '!'
        client.on("message", function(message) {
            if(message.content===PREFIX+"ping"){
                let debut = Date.now();
                message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now()-debut}ms`));
            }
        })
      
}
