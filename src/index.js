const { bot } = require('./server');
const PingController = require('./App/Controllers/PingController');
const AvatarController = require('./App/Controllers/AvatarController');

bot.on('message', async (msg) => {
  if (msg.content === '!ping') {
    await PingController(msg);
  }

  if (msg.content === '!avatar') {
    await AvatarController(msg);
  }
});
