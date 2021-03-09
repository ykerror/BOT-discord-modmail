const { Collection,MessageEmbed } = require('discord.js');
module.exports = async(client, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return client.emit("directMessage", message);
  if (!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return ;


  
  
  if (!message.content.startsWith(client.config.PREFIX)) return;


  const args = message.content.slice(client.config.PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

  if (!command) return;
  if(command.help.permissions){
    if(!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send("You don't have permission for use this command.")
  }
      
  if (command.help.args && !args.length) {

    const embed = new MessageEmbed()
    .setColor(client.config.color.EMBEDCOLOR)
    .setAuthor(`Command : ${client.config.PREFIX}${command.help.name}`,`${client.user.avatarURL()}`)
    .addField("**__Description :__**", `${command.help.description} (cd: ${command.help.cooldown}secs)`)
    .addField("**__Use :__**", command.help.usage ? `${client.config.PREFIX}${command.help.name} ${command.help.usage}` : `${client.config.PREFIX}${command.help.name}`, true)
    .setTimestamp()
    .setFooter(`BOT ID : ${client.user.id}`, `${message.guild.iconURL()}`);
    if (command.help.aliases.length > 1) embed.addField("**__Alias :__**", `${command.help.aliases.join(`, `)}`);
    if (command.help.exemple && command.help.exemple.length > 0) embed.addField("**__Exemples :__**", `${client.config.PREFIX}${command.help.exemple.join(`\r\n${client.config.PREFIX}`)}`);
    if (command.help.sousCommdandes && command.help.sousCommdandes.length > 0) embed.addField("**__Subcommands :__**", `${client.config.PREFIX}${command.help.sousCommdandes.join(`\r\n${client.config.PREFIX}`)}`);
    return message.channel.send(embed);
  };


  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  };
  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;
  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.channel.send(`${client.config.emojis.error} Please wait ${timeLeft.toFixed(0)} second(s) before using the command again \`${command.help.name}\`.`);
    }
  }
  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args)
    
}