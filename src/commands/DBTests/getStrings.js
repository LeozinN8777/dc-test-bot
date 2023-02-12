const discord = require('discord.js');
const String = require('../../database/strings');

module.exports = {
    /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  name: "getstrings",
  description: "Lista as strings do DB",
  devOnly: false,

    callback: async (client, interaction) => {
        try {
            const strings = await String.find();
            let list = ""
            for (let i = 0; i < strings.length; i++) {
                list = list + "\n-> " + strings[i].createdAt;
            }
            
            if (!list) {
                interaction.reply({ content: ' Não há Strings registradas na database.' });
                return
            }  

            interaction.reply(list)
        } catch (err) {
            console.error(err);
        }
    }
}