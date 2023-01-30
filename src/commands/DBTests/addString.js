const String = require("../../database/strings");
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
  name: "addstring",
  description: "Armazena string no DB",
  devOnly: false,
  options: [
    {
      name: "string",
      description: "String que deseja armazenar",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  callback: async (client, interaction) => {
    const string = interaction.options.getString("string");

    await String.create({
      stg: string,
    });

    await interaction.reply(`Registrado com sucesso!\n (${string})`);
  },
};
