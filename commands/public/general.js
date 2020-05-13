module.exports = (client)=>{
    const {PREFIX} =require('./../../config.js');

    client.on("message", function(message) {
        if(!message.author.bot){       
       
        
        
        if(message.content===PREFIX+"pileouface"){
            var nombreAleatoire = Math.round(Math.random()*1);
             //console.log(nombreAleatoire);
            var reponse;
            if(nombreAleatoire == 1){
            message.channel.send("Pile")
            } else {
            message.channel.send("Face")
            }
        }
        
        if(message.content===PREFIX+'dés'){
            function entierAleatoire(min, max)
            {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            //Utilisation
            //La variable contient un nombre aléatoire compris entre 1 et 10
            var entier = entierAleatoire(1, 6);
            message.reply(entier)
        }
    }
    });
    
}
