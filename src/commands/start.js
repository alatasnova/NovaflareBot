const {Markup} = require("telegraf")
const {sleep} = require("../tools/test")

async function action(bot, ctx){
    ctx.replyWithHTML(ctx.i18n.t('start'), Markup.inlineKeyboard([
        [Markup.button.callback("Заказы в ожидании 🕒", "orders_are_pending")],
        [Markup.button.callback("Заказы на проверке 🔎", "orders_under_review")],
        [Markup.button.callback("⭐ Сделать заказ ⭐", "make_order")],
        [Markup.button.callback("ТЕСТОВАЯ ФУНКЦИЯ (ЗАПРОС В БД)", "test")]
    ]))
}

module.exports = {
    action: action,
    description: "Начать"
}