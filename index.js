const TelegramApi = require('node-telegram-bot-api');

const token = '7183856441:AAEhIUWHiH3ultfbjnJX6iau53llSpmcEz0';

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
    { command: '/start', description: 'Greetings' },
    { command: '/info', description: 'Info about user' },
]);

bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
        return bot.sendMessage(chatId, `Hello! Just give link to download :)`);
    }
    if (text === '/info') {
        return bot.sendMessage(chatId, `Your name is ${msg.from.first_name}`);
    }
    return bot.sendMessage(chatId, 'I dont really understand you :(');
});
