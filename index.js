require('dotenv').config()
const { Telegraf } = require('telegraf')
const { helpMessage, startMessage } = require('./messages')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(startMessage))
bot.help((ctx) => ctx.reply(helpMessage))

bot.on('text', (ctx) => {
  let input = ctx.update.message.text

  input = input.replace('&', 'e')
  input = input.replace(/\s+-*\s*/g, '-').toLocaleLowerCase()
  const output = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  ctx.reply(output)
})

bot.launch()