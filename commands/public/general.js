module.exports = (client)=>{
    const prefix = '!'
    client.on("message", function(message) {
        if(!message.author.bot){       
        if(message.content===prefix+"avatar"){
            message.reply(message.author.displayAvatarURL());
        }
        if(message.content==="!guilem"){
            let bon = client.emojis.cache.find(emoji => emoji.name === "bon");
            message.channel.send('<@345943442817286146> : miam miam les couilles de noval sont délicieuses !')
            message.channel.send(`${bon}`)

        }
        
        if(message.content===prefix+"pileouface"){
            var nombreAleatoire = Math.round(Math.random()*1);
             //console.log(nombreAleatoire);
            var reponse;
            if(nombreAleatoire == 1){
            message.channel.send("pile")
            } else {
            message.channel.send("face")
            }
        }
        
        if(message.content===prefix+'dés'){
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
