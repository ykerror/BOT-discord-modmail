const { Client, Collection, TextChannel } = require('discord.js');
const {readdirSync} = require('fs')
const client = new Client({// ws: { intents: myIntents }
  disableMentions : 'everyone',
  ws: { intents: ['GUILDS','GUILD_MESSAGES','GUILD_MEMBERS','DIRECT_MESSAGES'] },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
["commands","cooldowns"].forEach(x => client[x] = new Collection());

  TextChannel.prototype.sendSuccessMessage = function(content, file){
    return this.send(`${client.config.emojis.success} ${content}`,{files : file})
  }
  TextChannel.prototype.sendErrorMessage = function(content, file){
    return this.send(`${client.config.emojis.error} ${content}`,{files : file})
  }

const loadCommands = (client, dir = "./commands") => {
    readdirSync(dir).forEach(dirs => { 
      const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
  
      for (const file of commands) {
        const getFileName = require(`./${dir}/${dirs}/${file}`);
        client.commands.set(getFileName.help.name, getFileName);
        console.log(`Commande chargée: ${getFileName.help.name}`);
      };
    });
  };
  
  const loadEvents = (client, dir = "./events") => {
    readdirSync(dir).forEach(dirs => {
      const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
      for (const event of events) {
        const evt = require(`${dir}/${dirs}/${event}`);
        const evtName = event.split(".")[0];
        client.on(evtName, evt.bind(null, client));
        console.log(`Evenement chargé: ${evtName}`);
      };
    });
  };
  
loadCommands(client);
loadEvents(client);

client.config = require("./config")
client.login(client.config.TOKEN);