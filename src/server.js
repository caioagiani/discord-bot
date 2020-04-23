const express = require('express');
const request = require('request');
const discord = require('discord.js');

if (process.env.node_env !== 'production') {
  require('dotenv').config();
}

const bot = new discord.Client();
const server = express();

bot.once('ready', () => {
  bot.user.setActivity('Visual Studio Code', { type: 'PLAYING' });
  bot.user.setStatus('online');
});

server.get('/', (_req, res) => {
  res.json({ status: 'on', version: '1.0', company: process.env.APPLICATION });
});

server.listen(process.env.PORT || 3333, () => {
  console.log({ status: 'bot on' });
});

setInterval(() => {
  request(
    `https://${process.env.APPLICATION}.herokuapp.com/`,
    (error, response, body) => {
      console.log(body);
    }
  );
}, 20 * 60 * 1000);

bot.login(process.env.TOKEN_DISCORD);

module.exports = {
  bot,
  discord,
  date: new Date(),
};
