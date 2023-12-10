const database = require("../tools/database")
const {Extra, Markup} = require("telegraf")

async function action(bot, cb){
    await cb.editMessageText(cb.i18n.t('wait_a_second'))
    const dataGetted = await database.getUserById()

    let answerMessage = "😴 Вот заказы, находящиеся в ожидании:\n" 
    let i = 1
    for(const user of dataGetted){
        answerMessage += i + ". " + (await bot.telegram.getChat(user.user_id)).first_name + " - " + user.order_date  + "\n"
        i += 1
    }
    cb.editMessageText(answerMessage)
}

module.exports = action