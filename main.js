const {Client, Collection}=require('discord.js');
const client = new Client({disableEveryone: true});
    const idServeur = '675374925527252993'
    const categorieDemandes ='695593316041097247'
    const logsDemandes ='697507654410567741'
    const adminId ='675415572703346693'
    const prefix ='????'
    const app = require('express')();
    const server = require('http').createServer(app);



client.commands = new Collection();

client.on('ready',()=> require('./commands/public/ping.js')(client));
client.on('ready',()=> require('./commands/public/reseaux.js')(client));
client.on('ready',(message)=> require('./modmail/modmail.js')(client,message));
client.on('ready',(message)=> require('./moderateur/addrole.js')(client,message));
client.on('ready',(message)=> require('./moderateur/remrole.js')(client,message));
client.on('ready',(message)=> require('./commands/message.js')(client,message));
client.on('ready',(message)=> require('./moderateur/kick.js')(client,message));




client.on('ready',()=> require('./events/ready.js')(client));
client.on('guildMemberAdd',(member)=>require('./events/guildMemberAdd.js')(client,member));

client.login('Njg5MjExNjEwMzA0MzQ4MzMx.XpSO2Q.7fphvdRY5uHlvK-OzE7crilD3xA')











server.listen(8080);