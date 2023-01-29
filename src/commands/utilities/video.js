const Video = require("../../models/video");
const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  name: "video",
  description: "Armazena video no DB",
  devOnly: false,
  options: [
    {
      name: "link",
      description: "Link do video que deseja armazenar",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  callback: async (client, interaction) => {
    const videoLink = interaction.options.getString("link");

    await Video.create({
      url: videoLink,
    });

    await interaction.reply(`Video registrado com sucesso!\n (${videoLink})`);
  },
};
