const discord = require("discord.js");
const vipsDB = require("../../database/vip");

module.exports = (client, guild) => {
    const logChannel = client.channels.cache.get('1042145058092240969');

    // canal de log

    setInterval( async () => {
        const vipsDBs = await vipsDB.find();

        for (let i = 0; i < vipsDBs.length; i++) {
            async function removeVIP() {
                await vipsDB
                .deleteOne({ userID: vipsDBs[i].userID })
                .then(() => {
                //   let member = guild.members.getMember(vipsDBs[i].userID);
                //   member.roles.remove(vipsDBs[i].VIPRoleID)
                  logChannel.send({embeds: {content: `VIP REMOVIDO!`, embeds: [embed]}});
                })
                .catch((error) => {
                  logChannel.send({
                    content: `@here, ocorreu um problema ao tentar remover o VIP: ${error}`,
                  });
                });
            }

            let dateNow = await new Date()
            
            if (dateNow > vipsDBs[i].Fim){
                let embed = new discord.EmbedBuilder()
                .setColor('Red')
                .setTitle(`${vipsDBs[i].userTAG} - ${vipsDBs[i].VIP}`)
                .setDescription(`userID: ${vipsDBs[i].userID} \n VIPRoleID: ${vipsDBs[i].VIPRoleID}`)
                .addFields(
                    { name: `Início:`, value: `${vipsDBs[i].Inicio}`},
                    { name: `Fim:`, value: `${vipsDBs[i].Fim}`},
                )

                await removeVIP()

                
            } else {
                console.log(`Verificação de VIP concluida. ${new Date()}`)
            }

        }
        

    }, 10000);






};
