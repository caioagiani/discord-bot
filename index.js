const discord = require('discord.js');
const express = require('express');
const request = require('request');

if (process.env.node_env !== 'production') {
  require('dotenv').config();
}

const server = express();
const bot = new discord.Client();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

bot.login(process.env.TOKEN_DISCORD);

server.get('/', (_req, res) => {
    res.json({
      status: 'on',
      version: '1.0',
    });
});

bot.once('ready', async () => {
  console.log('Bot ON!');
  bot.user.setActivity('DataCorp', { type: 'PLAYING' });
  bot.user.setStatus('online');
});

bot.on('message', (msg) => {
  if (msg.content === '!ping') {
    const pingEmbed = new discord.MessageEmbed()
      .setColor('#1a65aa')
      .setTitle(
        'Pong !  :smile:  |  ' + bot.ws.ping + 'ms :hourglass_flowing_sand:'
      );
    msg.channel.send(pingEmbed);
    console.log(' [+] ping (' + bot.ws.ping + 'ms)');
  }
});

server.listen(process.env.PORT || 3333, () => {
  console.log({
    status: 'on',
    version: '1.0',
  });
});

const ping = () => request('https://datacorp-bot.herokuapp.com/', (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});

setInterval(ping, 20 * 60 * 1000);
