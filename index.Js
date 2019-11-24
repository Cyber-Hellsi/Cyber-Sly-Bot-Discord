const Discord = require('discord.js')
const bot = new Discord.Client()


//instance
bot.on('ready', function () {
 
 bot.user.setActivity('vos commandes', { type: 'WATCHING' })

})

bot.on('message', function (message) {

if(message.content === '/help') {

  let testEmbed = new Discord.RichEmbed()
    .setDescription("Les commandes de ce bot sont: ")
    .setColor("#830a2d")
    .addField("-/help (donne toutes les commandes de ce bot)", "-/server (donne les informations sur votre server)")
    .addField("-", "-")
    .addField("-", "-")
    .addField("-", "-")
    .setFooter("Discord du créateur du bot: Hellsi#7994")
  message.channel.send(testEmbed)
  
}

  if(message.content === '/server'){

    let server_name = message.guild.name 
    let server_size = message.guild.members.size
    message.channel.send('Server : '+ server_name + '\nPersonnes : ' + server_size)
  }

})

bot.login(process.env.TOKEN)
