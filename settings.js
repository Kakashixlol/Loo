//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: mego" //ur yt chanel name
global.socialm = "GitHub: botmego11" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = '*『🔥┇𝙼𝙴𝙶𝙾-𝙱𝙾𝚃』*' //ur bot name
global.ownernumber = ['201025663589'] //ur owner number, dont add more than one
global.ownername = '𝙢,𝙚,𝙜,𝙤, ❦︎' //ur owner name
global.websitex = "https://youtu.be/mego51_51"
global.wagc = "https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x"
global.themeemoji = '❄️'
global.wm = "𝙈𝙢𝙀𝙚𝙂𝙜𝙊𝙤."
global.botscript = 'https://github.com/Botmego11/MegoBot-MG' //script link
global.packname = "Sticker By"
global.author = "𝙈𝙢𝙀𝙚𝙂𝙜𝙊𝙤\n\n+201025663589"
global.creator = "201025663589@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["201012531172"] // Premium User

//channel id
global.xchannel = {
	jid: '120363230213252726@newsletter'
	}

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
