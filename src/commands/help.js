function action(bot, ctx){
    ctx.reply(ctx.i18n.t('help'))
}

module.exports = {
    action: action,
    description: "Вывод помощи"
}