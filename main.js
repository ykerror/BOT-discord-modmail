const {Client, Collection}=require('discord.js');
const client = new Client({disableEveryone: true});
// ***************************************************************************************************
// ======================================= AU LANCEMENT DU BOT =======================================
// ***************************************************************************************************
 const {token} = require('./config.js')

client.commands = new Collection();

// ***************************************************************************************************
// ============================================== PUBLIC =============================================
// ***************************************************************************************************
client.on('ready',()=> require('./commands/public/ping.js')(client));
client.on('ready',()=> require('./commands/public/avatar.js')(client));
client.on('ready',()=> require('./commands/public/general.js')(client));
client.on('ready',()=> require('./commands/public/commandes.js')(client));
//client.on('ready',()=> require('./commands/public/reseaux.js')(client));
client.on('ready',()=> require('./commands/public/dés.js')(client));

// ***************************************************************************************************
// ============================================== ADMIN ==============================================
// ***************************************************************************************************
client.on('ready',(message)=> require('./moderateur/addrole.js')(client,message));
client.on('ready',(message)=> require('./moderateur/remrole.js')(client,message));
client.on('ready',()=> require('./commands/admin/spiritus.js')(client));
client.on('ready',()=> require('./moderateur/kick.js')(client));
client.on('ready',()=> require('./moderateur/ban.js')(client));
client.on('ready',()=> require('./moderateur/warn.js')(client));
client.on('ready',()=> require('./moderateur/clear.js')(client));

client.on('ready',(message)=> require('./modmail/modmail.js')(client,message));

const client = new Client({// ws: { intents: myIntents }
  disableMentions : 'everyone',
  ws: { intents: ['GUILDS','GUILD_MESSAGES','GUILD_MEMBERS','GUILD_EMOJIS','GUILD_WEBHOOKS','DIRECT_MESSAGES'] },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']});

client.on('ready',()=> require('./events/ready.js')(client));




