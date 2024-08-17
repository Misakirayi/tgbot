const { Bot } = require("grammy");

const bot = new Bot("7461508544:AAEo6rVVVzVk6SFj_d8ciH1m2Eg-JH6Gzpw"); 

// 监听信息
bot.on("message:text", (ctx) => ctx.reply("已收到: " + ctx.message.text));

// 启动机器人
bot.start();
