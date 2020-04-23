const { bot, discord, date } = require('../../../src/server');

module.exports = async (msg) => {
  const pingEmbed = new discord.MessageEmbed()
    .setColor('#1a65aa')
    .setTitle(
      'Pong!  :smile:  |  ' + bot.ws.ping + 'ms :hourglass_flowing_sand:'
    )
    .setTimestamp(date)
    .setFooter(msg.author.username);

  msg.channel.send(pingEmbed);
};
