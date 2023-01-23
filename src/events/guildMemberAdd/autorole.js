module.exports =(client, member) => {
    let role = member.guild.roles.cache.get("1066403839726583958")
    if (!role) return console.log("❌ O AUTOROLE não está configurado.")
  
    member.roles.add(role.id).catch(err => {
      console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
  })
}