const discord = require('discord.js');
const String = require('../../database/strings');
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
    name: "remstring",
    description: "Remove a string no DB",
    devOnly: false,
    options: [
      {
        name: "string",
        description: "String que deseja remover",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],

    callback: async (client, interaction) => {
            const string = interaction.options.getString("string");

            String.deleteOne({ stg: string })
            .then(() => {
                interaction.reply(`Removida com sucesso!\n (${string})`);
            })
            .catch((error) => {
                interaction.reply({ content:`Ocorreu um problema ao tentar remover a string: ${error}`, ephemeral: true})
            })

    }
}