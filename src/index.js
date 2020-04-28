const { bot } = require('./server');
const PingController = require('./App/Controllers/PingController');
const AvatarController = require('./App/Controllers/AvatarController');
const PassagemController = require('./App/Controllers/PassagemController');
const EconomiaController = require('./App/Controllers/EconomiaController');
const YoutubeController = require('./App/Controllers/YoutubeController');

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

    case '!dolar':
      await EconomiaController(msg);
      break;

    case '!play':
      await YoutubeController(msg);
      break;
  }
});
