const database = require("../tools/database")

async function action(bot, cb){
    await cb.editMessageText(cb.i18n.t('wait_a_second'))
    const dataGetted = await database.addOrder(cb.from.id)
    cb.editMessageText("Вы возможно были добавлены в бд!")
}

module.exports = action