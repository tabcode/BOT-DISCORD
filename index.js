const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const path = require('path');

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('dnd');
    console.log(client.user.presence.status);
    // const channel = client.channels;
    // console.log(channel);
});

client.on('message', async (message) => {
    if (message.content == 'ping') {
        message.reply('pong')
    };

    if (message.content == 'hello') {
        message.channel.send(`hello ${message.author}!`);
    };

    if (message.content.includes('!test')) {
        message.channel.send('Glad you are testing.')
    };

    if (message.content === '!tabcodet') {
        message.channel.send('https://github.com/tabcode');
    };

    if (message.content === '!pretty') {
        const embed = new MessageEmbed()
            .setTitle('A slick little embed')
            .setColor(0xff0000)
            .setAuthor('tabcode', 'https://www.vhv.rs/dpng/d/415-4153477_raccoon-png-free-download-transparent-racoon-png-png.png')
            .setDescription('Hello, this is a slick embed!');
        message.channel.send(embed)
    };

    if (message.content === '!clear') {
        const fetched = await message.channel.messages.fetch({
            limit: 100
        });
        message.channel.bulkDelete(fetched);
    };
});

client.login('ODMzMDc5NDAwOTI3OTg1Nzc1.YHtHpw.3cSxAjn1yTdYmbCzKlIozzlDxMo');