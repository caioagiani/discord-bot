const { bot } = require('./server');
const PingController = require('./App/Controllers/PingController');
const AvatarController = require('./App/Controllers/AvatarController');
const PassagemController = require('./App/Controllers/PassagemController');

bot.on('message', async (msg) => {
  switch (msg.content) {
    case '!ping':
      await PingController(msg);
      break;

    case '!avatar':
      await AvatarController(msg);
      break;

    case '!turno':
      await PassagemController(msg);
      break;
  }
});
