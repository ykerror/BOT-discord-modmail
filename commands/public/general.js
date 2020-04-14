module.exports = (client)=>{
    const prefix = '!'
    client.on("message", function(message) {
        if(!message.author.bot) {

        if(message.content===prefix+"commandes"){
            let g4 = client.emojis.cache.find(emoji => emoji.name === "g4");
            let fleche = client.emojis.cache.find(emoji => emoji.name === "fleche");

            message.reply(`Voici les commandes enregistrer :\r\n 
            ${fleche} **Les réseaux sociaux**\r\n 
            ${g4} **${prefix}fb** Donne le lien de notre page facebook \r\n 
            ${g4} **${prefix}twitter** Donne le lien de notre page twitter\r\n 
            ${g4} **${prefix}insta** Donne le lien de notre page instagram\r\n 
            ${g4} **${prefix}utip** Donne le lien de notre page utip\r\n
            ${g4} **${prefix}youtube** Donne le lien de notre chaine youtube\r\n
            ${fleche} **Les commandes**\r\n 
            ${g4} **${prefix}avatar** montre votre avatar au grand format\r\n
            ${g4} **${prefix}pileouface** faites jouer le hasard !\r\n
            ${g4} **${prefix}dés** lance un dés a 6 faces\r\n`);          
        }
        if(message.content===prefix+"avatar"){
            message.reply(message.author.displayAvatarURL());
        }
        if(message.content==="!guilem"){
            let bon = client.emojis.cache.find(emoji => emoji.name === "bon");
            message.channel.send('<@345943442817286146> : miam miam les couilles de noval sont délicieuses !')
            message.channel.send(`${bon}`)

        }
        if(message.content===prefix+"ping"){
            let debut = Date.now();
            message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now()-debut}ms`));
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
