const discord = require('discord.js');

if (process.env.node_env !== 'production') {
  require('dotenv').config();
}

const bot = new discord.Client({ autoReconnect: true });

bot.login(process.env.TOKEN_DISCORD);

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
