const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters')
const express = require('express');
const app = express()
const bot = new Telegraf('6830491660:AAHNWamPUrpMTmkFPe2IAGRSE3S7i9SSLcU');

app.get('*', (req, res)=>{
    res.status(403).send('Illegal Request');
});

app.post('*', (req, res)=>{
    res.status(403).send('Illegal Request');
});

bot.launch()

bot.start((ctx)=>{
    ctx.reply('Hello There!');
});

bot.on(message('text'), (ctx)=>{
    ctx.reply(ctx.message.text)
});

console.log('Bot Running!')

app.listen(3000, ()=>{
    console.log('App is running!')
});

process.on('SIGINT', ()=>{ bot.stop('SIGINT') });
process.on('SIGTERM', ()=>{ bot.stop('SIGTERM') }); 