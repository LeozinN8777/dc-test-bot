require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  client.user.setActivity({
    name: "Hello world",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  })
});

client.login(process.env.TOKEN);