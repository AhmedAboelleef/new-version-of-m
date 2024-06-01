*/

const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "link",
  description: "Get link for the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#0099ff')
      .setTitle('💎 Link')
      .setDescription('Welcome to the Music Bot!\n\n- Here is the link:\n\n' +
    
        '**Link :** https://discord.com/api/oauth2/authorize?client_id=1202073758949711903&permissions=689345783808&scope=bot');

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*
