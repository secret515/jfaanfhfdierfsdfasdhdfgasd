const Discord = require('discord.js');
const client = new Discord.Client();

const adkar = [
	'**اذكار| **http://3.bp.blogspot.com/-5iWFtxjg4Es/VUaMu2yQaLI/AAAAAAAAALk/6ehAR3QAqlI/s1600/0e3f4c4a6cfa05.jpg.',
	'**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
	'**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('!اذكار')) {
	if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("**اذكار**")
  .setThumbnail(message.author.avatarURL)
	.setFooter(`© SecreT ™.`, 'https://2.bp.blogspot.com/-aB5g2oa1Zw4/UPxVMkvasfI/AAAAAAAAEnM/yfaLCefnZLc/s1600/4563w.jpg')
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
				 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
  
  
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
