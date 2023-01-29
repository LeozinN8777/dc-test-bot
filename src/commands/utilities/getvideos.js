const discord = require('discord.js');
const Video = require('../../models/video');

module.exports = {
    /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  name: "getvideos",
  description: "Armazena video no DB",
  devOnly: false,

    callback: async (client, interaction) => {
        try {
            const videos = await Video.find();
            let list = ""
            for (let i = 0; i < videos.length; i++) {
                list = list + "\n-> " + videos[i].url;
            }

            if (!list) {
                interaction.reply({ content: ' Não há vídeos registrados na database.' });
                return
            }  

            interaction.reply(list)
        } catch (err) {
            console.error(err);
        }
    }
}