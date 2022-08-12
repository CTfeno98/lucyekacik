const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports.run = async (bot, message, args) => {




  if(!message.content.startsWith('+'))return;  

  let user = message.author;

  let timeout = 83880000 ;
  let amount = Math.floor(Math.random()*250+150);
  let daily =  db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n**Zaten Günlük Para Bonusunu Aldın.**\n\nBonusunu Tekrar Alabilmen İçin Geri Kalan Süre: **${time.hours}** __saat__ **${time.minutes}** __dakika__ **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#52f0a8")
  .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n **${amount} Lira** günlük paranı aldın.`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
    
    

    
  

     {
      }
  } }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'günlükpara',
  description: 'Günlük paranı alırsın',
  usage: '+günlükpara'
};
