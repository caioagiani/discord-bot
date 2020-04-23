const { discord, date } = require('../../../src/server');

module.exports = async (msg) => {
  let user = msg.mentions.users.first() || msg.author;
  let avatarURL = user.displayAvatarURL();

  const avatar = new discord.MessageEmbed()
    .setColor('#1a65aa')
    .setTimestamp(date)
    .setFooter(msg.author.username)
    .setImage(avatarURL);

  msg.channel.send(avatar);
};
