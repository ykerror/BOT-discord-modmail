const {Client, Collection}=require('discord.js');
const client = new Client({disableEveryone: true});
const app = require('express')();
const server = require('http').createServer(app);
// ***************************************************************************************************
// ======================================= AU LANCEMENT DU BOT =======================================
// ***************************************************************************************************


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
client.on('ready',(message)=> require('./commands/message.js')(client,message));
client.on('ready',()=> require('./commands/admin/spiritus.js')(client));
client.on('ready',()=> require('./moderateur/kick.js')(client));
client.on('ready',()=> require('./moderateur/ban.js')(client));
client.on('ready',()=> require('./moderateur/warn.js')(client));
client.on('ready',()=> require('./moderateur/clear.js')(client));


//***************************************************************************************************
// ============================================== EVENTS =============================================
// ***************************************************************************************************
client.on('ready',()=> require('./events/ready.js')(client));
client.on('guildMemberAdd',(member)=>require('./events/guildMemberAdd.js')(client,member));
client.on('guildMemberRemove',(member)=>require('./events/guildMemberRemove.js')(client,member));
client.on('ready',(message)=> require('./modmail/modmail.js')(client,message));

client.login(process.env.TOKEN)











server.listen(8080);


