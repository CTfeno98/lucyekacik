const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (bot, message, args) => {
    
    let user = message.author;
      var boş = args.join(' ');

        if(!boş) return message.reply('Lütfen satacağınız ürünü yazınız. \n Örnek: +sat hamsi')

        let timeout = 5000;
  let satışbekleme =  db.fetch(`satışbekleme_${message.guild.id}_${user.id}`);

  if (satışbekleme !== null && timeout - (Date.now() - satışbekleme) > 0) {
    let time = ms(timeout - (Date.now() - satışbekleme));
    
        let timeEmbed = new Discord.RichEmbed()
    .setColor("#52f0a8")
    .setDescription(` **${user},** __Kullanıcısı İçin;__ \n\n** :hourglass: Lütfen biraz yavaşla! **\n\nBeklemen Gereken Süre:  **${time.seconds}** __saniye__ `);
    message.channel.send(timeEmbed)
  } else {
  

      if(args[0].toLowerCase() == 'hamsi') {
        
        let Embed2 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(`**${user},** __Kullanıcısı İçin;__ \n\n  \`Hamsi\` balığı sen de yok o yüzden satamazsın.`);

        let Hamsi = await db.fetch(`Hamsi_${message.guild.id}_${user.id}`)

        if (Hamsi < 1) return message.channel.send(Embed2)
        
        
       
        db.fetch(`Hamsi_${message.guild.id}_${user.id}`)
        db.subtract(`Hamsi_${message.guild.id}_${user.id}`, 1)
        db.set(`satışbekleme_${message.guild.id}_${user.id}`, Date.now());

        
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(`**${user},** __Kullanıcısı İçin;__ \n\n \`Hamsi\` balığın \`25\` paraya satıldı.`);

        db.add(`money_${message.guild.id}_${user.id}`, 25)
          message.channel.send(Embed3)
        

        }
                    if(args[0].toLowerCase() == 'kefal') {
  
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(`**${user},** __Kullanıcısı İçin;__ \n\n \`Kefal\` balığı sen de yok o yüzden satamazsın.`);

        let Kefal = await db.fetch(`Kefal_${message.guild.id}_${user.id}`)

        if (Kefal < 1) return message.channel.send(Embed3)
        
        
       
        db.fetch(`Kefal_${message.guild.id}_${user.id}`)
        db.subtract(`Kefal_${message.guild.id}_${user.id}`, 1)
        db.set(`satışbekleme_${message.guild.id}_${user.id}`, Date.now());

        
        let Embed4 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(`**${user},** __Kullanıcısı İçin;__ \n\n \`Kefal\` balığın \`35\` paraya satıldı.`);

        db.add(`money_${message.guild.id}_${user.id}`, 35)
          message.channel.send(Embed4)

                      
                              }
                    if(args[0].toLowerCase() == 'kalkan') {
  
        let Embed3 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(`**${user},** __Kullanıcısı İçin;__ \n\n \`Kalkan\` balığı sen de yok o yüzden satamazsın.`);

        let Kalkan = await db.fetch(`Kalkan_${message.guild.id}_${user.id}`)

        if (Kalkan < 1) return message.channel.send(Embed3)
        
        
       
        db.fetch(`Kalkan_${message.guild.id}_${user.id}`)
        db.subtract(`Kalkan_${message.guild.id}_${user.id}`, 1)
        db.set(`satışbekleme_${message.guild.id}_${user.id}`, Date.now());

        
        let Embed4 = new Discord.RichEmbed()
        .setColor("#52f0a8")
        .setDescription(`**${user},** __Kullanıcısı İçin;__ \n\n \`Kalkan\` balığın \`50\` paraya satıldı.`);

        db.add(`money_${message.guild.id}_${user.id}`, 50)
          message.channel.send(Embed4)

    }  
    

   
                                      if(args[0].toLowerCase() == "olta") {
                            message.reply("**Bu ürün satılamaz**")
                                        }  
                                               if(args[0].toLowerCase() == "kazma") {
                            message.reply("**Bu ürün satılamaz**")
                                                 }
                                                 
    
};
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sat',
  description: 'Sahip olduğun ürünleri satabilirsin.',
  usage: '+sat'
};