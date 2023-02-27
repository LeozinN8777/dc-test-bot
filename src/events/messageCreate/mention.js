module.exports = (client, message) => {
    if (message.author.bot) return;

    let mention = [`<@${client.user.id}>`, `<!@${client.user.id}>`]

    mention.forEach(element => {
        if (message.content === element) {
            message.reply('Olá! uso slash commands\nPara usar meus comandos use ``/``');
        }
    })
}