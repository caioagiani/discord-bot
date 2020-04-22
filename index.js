const discord = require('discord.js');
const express = require('express');
const request = require('request');

if (process.env.node_env !== 'production') {
  require('dotenv').config();
}

const server = express();
const bot = new discord.Client();
let date = new Date();

bot.login(process.env.TOKEN_DISCORD);

server.get('/', (_req, res) => {
  res.json({ status: 'on', version: '1.0', company: process.env.APPLICATION });
});

bot.once('ready', async () => {
  bot.user.setActivity('Visual Studio Code', { type: 'PLAYING' });
  bot.user.setStatus('online');
});

bot.on('message', async (msg) => {
  if (msg.content === '!ping') {
    const pingEmbed = new discord.MessageEmbed()
      .setColor('#1a65aa')
      .setTitle(
        'Pong!  :smile:  |  ' + bot.ws.ping + 'ms :hourglass_flowing_sand:'
      )
      .setTimestamp(date)
      .setFooter(msg.author.username);

    await msg.channel.send(pingEmbed);
  }

  if (msg.content === '!avatar') {
    let user = msg.mentions.users.first() || msg.author;
    let avatarURL = user.displayAvatarURL();

    const avatar = new discord.MessageEmbed()
      .setColor('#1a65aa')
      .setTimestamp(date)
      .setFooter(msg.author.username)
      .setImage(avatarURL);

    await msg.channel.send(avatar);
  }
});

server.listen(process.env.PORT || 3333, () => {
  console.log({
    status: 'on',
    version: '1.0',
    company: process.env.APPLICATION,
  });
});

setInterval((ping) => {
  request(
    `https://${process.env.APPLICATION}.herokuapp.com/`,
    (error, response, body) => {
      console.log('body:', response.statusCode);
    }
  );
}, 20 * 60 * 1000);
