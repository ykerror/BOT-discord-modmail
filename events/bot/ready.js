module.exports =async client => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activity: { name: `${client.config.statut}`, type: 'WATCHING' }, status: 'online' });
    
  }