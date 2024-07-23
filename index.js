const TelegramBot = require('node-telegram-bot-api');

const token = '7244149756:AAG13xvKJtd64ZKt7AocLcXuT_liVQbL2Ko';
const webAppUrl = 'file:///Users/1vakhnenkkkk/WebstormProjects/tgbot1/index.html'

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start'){
        await bot.sendMessage(chatId, 'nizhe',{
            reply_markup: {
                keyboard: [
                    [{text: 'zapolnit'}]
                ]
            }
        })
    }

    bot.sendMessage(chatId, 'Received your message');
});