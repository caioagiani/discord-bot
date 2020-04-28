const request = require('request');
const { discord, date } = require('../../../src/server');

const options = {
  method: 'GET',
  url: 'https://economia.awesomeapi.com.br/all/USD-BRL,BTC-BRL,EUR-BRL',
};

module.exports = async (msg) => {
  request(options, async (error, response, body) => {
    const { USD, BTC, EUR } = JSON.parse(body);

    const avatar = new discord.MessageEmbed()
      .setColor('#00cc00')
      .addFields(
        { name: `${USD.code}`, value: `R$ ${USD.bid}`, inline: true },
        // {
        //   name: 'Maior valor atingido hoje',
        //   value: `R$ ${USD.high}`,
        //   inline: false,
        // },
        { name: `${BTC.code}`, value: `R$ ${BTC.bid}`, inline: true },
        // {
        //   name: 'Maior valor atingido hoje',
        //   value: `R$ ${BTC.high}`,
        //   inline: false,
        // },
        { name: `${EUR.code}`, value: `R$ ${EUR.bid}`, inline: true }
        // {
        //   name: 'Maior valor atingido hoje',
        //   value: `R$ ${EUR.high}`,
        //   inline: false,
        // }
      )
      .setTimestamp(date)
      .setFooter(msg.author.username);

    console.log(
      USD.bid.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    );

    msg.channel.send(avatar);
  });
};
