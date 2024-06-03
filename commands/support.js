/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/BEHqBCCAGE";
      const instagramLink = "https://www.instagram.com/5.ni3_/";
      const tiktokLink = "https://www.tiktok.com/@ahmed_aboelleef?is_from_webapp=1&sender_device=pc";
      const botlink = "https://discord.com/api/oauth2/authorize?client_id=1202073758949711903&permissions=689345783808&scope=bot";
    const steamLink = "https://steamcommunity.com/profiles/76561199223182007/";
        const embed = new EmbedBuilder()
            .setColor('#82D12E')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/emojis/950396835292397608.gif?size=128&quality=lossless', 
              url: 'https://discord.gg/BEHqBCCAGE'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n - BotLink - ${botlink}\n\n➡️ **Follow us on:**\n- Instagram - ${instagramLink}\n- Tiktok - ${tiktokLink}\n- Steam - ${steamLink}`)
            .setImage('https://cdn.discordapp.com/attachments/822025329253023766/1245768538564595817/11.gif?ex=6659f3dc&is=6658a25c&hm=dd7c051d3ff953e2e12abdc7cc8d967de3cf300f1723dcce9bb1d5cd732af017&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
