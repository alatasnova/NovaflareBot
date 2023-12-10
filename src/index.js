const { Telegraf, Markup } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n');
const path = require("path")
const initcommands = require("./initcommands")
const initcallbacks = require("./initcallbacks")

const { TOKEN } = require("../botconfig.json");
const bot = new Telegraf(TOKEN);

const i18n = new TelegrafI18n({
    defaultLanguage: 'ru',
    directory: path.resolve(__dirname, 'locales'),
});

bot.use(i18n.middleware());

// just init commands
const commands = initcommands()
for(const command of commands){
    console.log("Command initialised /" + command.command + " - " + command.description)
    bot.command(command.command, (ctx) => {command.action(bot, ctx)})
}
bot.telegram.setMyCommands(commands.map((item) => ({command: item.command, description: item.description})))
// just init callbacks
const callbacks = initcallbacks()
for(const callback of Object.keys(callbacks)){
    console.log("Callback initialised - " + callback)
}

bot.on("callback_query", (cb)=>{
    const action = callbacks[cb.callbackQuery.data]
    if(action == undefined) return cb.answerCbQuery("Error. This callback data is undefined.")
    action(bot, cb)
})

bot.launch();