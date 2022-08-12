const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  

      let user = message.mentions.users.first() || message.author;

        let userinfo = {};
        
      userinfo.avatar = user.displayAvatarURL;
       
      userinfo.id = user.id;
  
  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

   let meslek = await db.fetch(`tamirci_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek === true) meslek = 'Tamirci'
  
        let meslek4 = await db.fetch(`demirci_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek4 === true) meslek = 'Demirci'
  
    let meslek2 = await db.fetch(`bankacı_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek2 === true) meslek = 'Bankacı'
  
      let meslek5 = await db.fetch(`kuyumcu_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek5 === true) meslek = 'Kuyumcu'
  
      let meslek6 = await db.fetch(`polis_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek6 === true) meslek = 'Polis'
  
        let meslek7 = await db.fetch(`öğretmen_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek7 === true) meslek = 'Öğretmen'
  
         let meslek8 = await db.fetch(`doktor_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek8 === true) meslek = 'Doktor'
  
           let meslek9 = await db.fetch(`avukat_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek9 === true) meslek = 'Avukat'
    
           let meslek10 = await db.fetch(`hakim_${message.guild.id}_${user.id}`)
    if(meslek === null) meslek = 'İşsiz'
    if(meslek10 === true) meslek = 'Hakim'
  
if (meslek === 1) meslek = "Tamirci";
if (meslek4 === 1) meslek = "Demirci";
if (meslek2 === 1) meslek = "Bankacı";
if (meslek5 === 1) meslek = "Kuyumcu";
if (meslek6 === 1) meslek = "Polis";
if (meslek7 === 1) meslek = "Öğretmen";
if (meslek8 === 1) meslek = "Doktor";
if (meslek9 === 1) meslek = "Avukat";
if (meslek10 === 1) meslek = "Hakim";



  
let kazma = await db.fetch(`kazma_${message.guild.id}_${user.id}`)


if (kazma === null) kazma = "";

if (kazma === 1) kazma = ":pick:";

    



let övgü = await db.fetch(`övgü_${message.guild.id}_${user.id}`);
  
if (övgü === null) övgü = 0;  

  let yem = await db.fetch(`yem_${message.guild.id}_${user.id}`);
  
if (yem === null) yem = 0;  

  let olta = await db.fetch(`olta_${message.guild.id}_${user.id}`);
  
if (olta === null) olta = "";  
  
  if (olta === 1) olta = ":fishing_pole_and_fish: ";
  
    let çanta = await db.fetch(`çanta_${message.guild.id}_${user.id}`);
  
if (çanta === null) çanta = "";  
  
  if (çanta === 1) çanta = "👜";
  
    let hamsi = await db.fetch(`Hamsi_${message.guild.id}_${user.id}`);

  if (hamsi === null) hamsi = "󠂪󠂪";  
  
  
    let kalkan = await db.fetch(`Kalkan_${message.guild.id}_${user.id}`);

  if (kalkan === null) kalkan = ""  
  
  
      let kefal = await db.fetch(`Kefal_${message.guild.id}_${user.id}`);

  if (kefal === null) kefal = ""  
  
    const ovgux = (bot.emojis.find("name", "10ovgu").toString())
  const ovguelli = (bot.emojis.find("name", "50ovgu").toString())
  const ovguyüz = (bot.emojis.find("name", "100ovgu").toString())
  const rozet = (bot.emojis.find("name", "rozet").toString())


  
    if(user.bot) return message.reply('**Botların profili olmaz.** ')
  


  
  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#52f0a8")
          .setAuthor(`${user.tag}' Profili ` ,  userinfo.avatar)
  .setDescription(`** :dollar: Para **\n ${money} \n\n:hammer_pick:  **Mesleği** \n ${meslek} \n \n **🍞 Yem** \n ${yem} \n \n 👝 **Eşyalar** \n ${kazma} ${olta} ${çanta}` )  
  .setThumbnail(user.avatarURL)

  message.channel.send(moneyEmbed)
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: '.',
  usage: ''
};
