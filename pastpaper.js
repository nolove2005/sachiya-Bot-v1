require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = ElisaBotMd = async (ElisaBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ElisaBotMd.decodeJid(ElisaBotMd.user.id)
    	const nimanumber = "94715166712"
        const isCreator = [botNumber,nimanumber ,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isNima = m.sender == "94715166712@s.whatsapp.net" ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await ElisaBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	
	    
        //member\\
        	
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
	  if(!isBotAdmins && m.isGroup && command)return await ElisaBotMd.sendText(m.chat,`*පළමුව බොට් සදහා ඇඩ්මින් ලබාදෙන්න!🥲🦾👑️*

*First! make the bot the group admin..!🥲🦾👑️*

*முதலில் போட்டை குழு நிர்வாகியாக்குங்கள்!🥲🦾👑️*

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ

	  `)
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `ᴏᴡɴᴇʀ ʙᴏᴛ ʙᴏᴛ ɢʀᴏᴜᴘ 😉\n☃⛓️Ոɿɱค ૦ԲԲɿ८ɿคՆ ᶜᴿᴱᵂ 🕯️❖`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://chat.whatsapp.com/Fs5ZpTLA3u64JN5a6K3a44"}}}, { quoted: m})
                          }
                          
                          const replay = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `ʙᴏᴛ ᴏᴡɴᴇʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇᴛ sᴜʙsᴄʀɪʙᴇ ᴘʟᴇᴀsᴇ !♥️ `, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q"}}}, { quoted: m})
                          }
                          const sendlogo = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `${global.ownernma}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://wa.me/94715166712?text=contact+get+from+Queen+elisa+logomaker+💃"}}}, { quoted: m})
                          }
	

        
        //Public & Self\\
        if (!ElisaBotMd.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            ElisaBotMd.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await ElisaBotMd.setStatus(`${ElisaBotMd.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await ElisaBotMd.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐦`)
        ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
       

 
				  
				 

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
      
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ElisaBotMd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ElisaBotMd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ElisaBotMd.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ElisaBotMd.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElisaBotMd.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElisaBotMd.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ElisaBotMd.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ElisaBotMd.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    ElisaBotMd.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ElisaBotMd.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ElisaBotMd.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) ElisaBotMd.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ElisaBotMd.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ElisaBotMd.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) ElisaBotMd.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) ElisaBotMd.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ElisaBotMd.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        
        case 'MR NIMA' : {
        reply (' *QUEEN ELISA BOT DEVOLOPER* ')
        }
        break
 
case 'kick':{
        if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw '*💬 නිවේදනය*\n\n'+ '```මෙය සමූහයේ පරිපාලකයින්ට පමණක් බාවිතකළහැකි විදානයකි !```'
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'remove')
reply('*කණ්ඩායම් නීති උල්ලංඝනය නිසා පරිපාලකයෙකු විසින් සමූහයෙන් පන්නා දමන ලදී✋😈*')
 
                      }
                      break
                      case 'add': {
if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) return reply( '*💬 නිවේදනය*\n\n'+ '```මෙය සමූහයේ පරිපාලකයින්ට පමණක් බාවිතකළහැකි විදානයකි !```')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'add')
reply('*සාර්ථකව සමූහයට ඇතුලත් කරගන්නා ලදී💖*')
}
                      break  
   case 'bcgctext' :{
                              if (!isCreator) return reply( mess.owner)
                              if (!text) throw `${Lang.BC_GC}\n${Lang.EXAMPLE} ${prefix + command} *Hello🤍*`
                                  let getGroups = await ElisaBotMd.groupFetchAllParticipating()
                                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                                  let anu = groups.map(v => v.id)
                                  reply(`*Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second*`)
                                  for (let i of anu) {
                                      await sleep(1500)
                                  await ElisaBotMd.sendText(i,`${text}`)
                            reply (`*සාර්ථකව සමූහවලට Broadcast කරන ලදී💖 ${anu.length} Group(s)*`)
                                  
                                  }
                                }
                              break
                              case 'bcimg' : {
                            //  let media = await quoted.download()
let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
                                
                              let getGroups = await ElisaBotMd.groupFetchAllParticipating()
                                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                                  let anu = groups.map(v => v.id)
                                  reply(`*Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second*`)
                                  for (let i of anu) {
                                      await sleep(1500)
                                  await ElisaBotMd.sendText(i,`${text}`)
                                  await ElisaBotMd.sendMessage(i, { image: { url: media } }, { quoted: m })
                                  reply (`*සාර්ථකව සමූහවලට Broadcast කරන ලදී💖 ${anu.length} Group(s)*`)
                                  
                                  }
                                
                              }
                              break      
        
case 'start':{
    const menu=`Past-Papers-OL-bot🎓 
By Pasindu Sandaruwan
    
Thank you for using This bot🎓
This is the one and Only Past papers Whatsapp bot🎓
    
මෙම බොට්ව භාවිතා කිරීම පිළිබදව ස්තූතිය..!
මෙය වට්සැප් හරහා ධාවනය වන එකම පාස්ට්පේපර් බොට් වේ..!
    
    Do you want to use this bot?
    send me *'menu'* command..!💓
    
    ඔබට පසුගිය සාමාන්‍යපෙල විභාග ප්‍රශ්නපත්‍ර ලබාගැනීමට අවශ්‍ය නම්
    *'menu'* යන විධානය භාවිත කරන්න..! 💓
    
    About Us...!✊
    අප ගැන...!
    *'about_us'*
    
    My youtube Channel💞
    යූටියුබ් නාලිකාව...!
    *'youtube'*
    
    Group Links...!🎲
    සමූහ වල Links..!
    *'g_links'*
    
    Credits..!♣
    *'credits'*

    If you want to Add past paper bot
    in your groups too...!✋🥲
    ඔයාගෙ Group වලටත් PastPaper
    Botව දන්න අවශ්‍ය නම්..!😍
    *'giveme'*

    
    
Owner Pasindu Sandaruwan🎁
wa.me/94716338723


Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ `
    ElisaBotMd.sendText(m.chat,menu)
	

 }

 break

case 'alive':{
    const menu=`*(RTD) Edu Bot is Alive😍*
 
🌀To Start this Bot send *"start"* Command

🌀බොට්ව ස්ටාර්ට් කරන්න
*"start"* කමාන්ඩ් එක එවන්න




*(RTD)EduBot by Pasindu Sandaruwan❤️* `
    ElisaBotMd.sendText(m.chat,menu)
	
	ElisaBotMd.sendMessage(m.chat, { audio: {url : 'https://github.com/SL-Real-Tech/PastPapers-Bot/raw/main/y2mate.com%20-%20B%C3%A9%20h%E1%BB%8Dc%20tr%C3%B2%20th%E1%BA%ADt%20l%E1%BB%A3i%20h%E1%BA%A1i%20%20shorts.mp3'}, ptt: true })

 }
break
 
case 'menu':{
    const menu=`ඔබට අවශ්‍ය විශයය තෝරන්න..!😇

    🔴බුද්ධ_ධර්මය *buddhism*
    🔴සිංහල *sinhala*
    🔴English *english*
    🔴ගණිතය *maths*
    🔴විද්‍යාව *science*
    🔴ඉතිහාසය *history*
    🔴පළමු_කාණ්ඩය *bas1*
    🔴දෙවන_කාණ්ඩය *bas2*
    🔴තෙවන_කාණ්ඩය *bas3*
    

t.me/pastpapersolbot 👈On Telegram

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break
case 'menu2' : {    
            let sections = [{

            "rows": [{
			"title": "🔴බුද්ධ_ධර්මය",
				"rowId": `buddhism`
			},
	     	{
			"title": "🔴සිංහල",
			"rowId": `sinhala`
			},
			{
			"title": "🔴English",
			"rowId": `english`
			},
			{
			"title": "🔴ගණිතය",
			"rowId": `maths`
			},
            {
			"title": "🔴විද්‍යාව",
			"rowId": `science`
			},
            {
			"title": "🔴ඉතිහාසය",
			"rowId": `history`
			},
            {
			"title": "🔴පළමු_කාණ්ඩය",
			"rowId": `bas1`
			},
            {
			"title": "🔴දෙවන_කාණ්ඩය",
			"rowId": `bas2`
			},
            {
			"title": "🔴තෙවන_කාණ්ඩය",
			"rowId": `bas3`
			}
          
        ]
      }
     ]
     await ElisaBotMd.sendListMsg(m.chat, `
     ඔබට අවශ්‍ය විශයය තෝරන්න..!😇 `,`${global.botnma}`,` `, `විෂය තෝරන්න`, sections, m)
 
        }
        break    
 
 
 
 case 'about_us':{
    const menu=`අප ගැන...!😁

අපි ගැන හැදින්වීමක් කලොත් 
මේ Botව හදන මම පසිදු සදරුවන්.😉
    
මම 2K21 වල O/L කලා..😁. මගේ සහෝදර සහෝදරියන්ට 
O/L Past-Papers ටික ගොඩක් වැදගත් සාමාන්‍යපෙළ විභාගෙට
ඒ නිසා ඔයාලටත් හෙල්ප් එකක් දෙන්න තමා මේ Bot හැදුවේ..!☺️
(සෙට් එකම ගොඩයන්න ඕනේ😎 තනියෙන් ගොඩගියත් වැඩක් නෑ..😍)
    
මම තාක්ෂණික පැතිකඩ ගැන YouTube Channel එකකුත් කරනවා😁
youtube.com/slrealtech
කැමතිනම් ඒකත් Subscribe කරගෙන යන්න🥰)
    
    
ඉතින් තව අපේ Admin Crew එකක් ඉන්නවා..!👊
    
    ⭕️Pasindu Sandaruwan(මම🙃)
    
    ⭕️Nimesh Madushanka [Dark_maker] (හැමදේම කියල දීපු එකා😎)
    
    ⭕️Thasini Himanga (Adminතුමී😎 Shortnotes_lk)

    ⭕️Ashi (Adminතුමා😎 FriendsBatch)
    
    ⭕️Ashen Fdo (Adminතුමා😎 OL_edu)
    
    ⭕️Mahesh Kavinda (අපේ ඉංග්‍රීසි සර්🙏😎)
    
    ⭕️Vidusha Hirushan (ඕනිම දේකට උදව්වට ඉන්න එකෙක්😎)
    
    ⭕️Nisinu Bhanula (Creative Ideas මොලේට දාන එකාහ්🤩)
    
    ⭕️Nirasha Prabodani (Bot Deploy කරන්න උදව් කරපු එකී😎)
    
    ⭕️Hirusha Dilshan(Motivation එක දීපු එකා😎)
    
    ⭕️Lahiru Madushan (Adminතුමා😎 OL_Edu)

    ⭕️Nirmal Wichramasinghe (Adminතුමා😎 RTD)
    
    ⭕️Lochana (Adminතුමා😎 RTD)

      
මෙයාලගෙ උදව්වෙන් තමා මේ වැඩ ඔක්කොම කරගෙන යන්නේ..!🥳
Whatsapp වගේම Telegram මේ බොට් ක්‍රියාත්මක වෙනවා..!
    
ඉතින් යාලුවනේ තව යාලුවෙක්ට උදව්වක් විදියට මේ Botව share කරන්න❤️.
    
(මේ botව පාවිච්චි කලා share කලා කියලා අපිට සල්ලි ලැබෙන්නෙ නෑ.🥲
සහෝදර සහෝදරියන්ට උදව්වක් විදියට තමා මේ වැඩේ කලේ😊)
    
O/L සුපිරි ගේමක් ගහන්න ඒනම්. සුභ දවසක්!✌️💪


Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 case 'giveme':{
    const menu=`
    Owner Pasindu Sandaruwan🎁
    wa.me/94716338723
    මට මැසේජ් එකක් දාන්න💖
    If you want to this bot for your groups😍

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ
    `
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

		

		

		
 case 'youtube':{
    const menu=`youtube.com/slrealtech
👆මේ තියෙන්නෙ අපේ YouTube Channel එක... මේකෙන් ඔයාලට ගොඩක්
තාක්ෂණික තොරතුරු දැනගන්න පුලුවන්.

Subscribe කරන්න ❤️

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ
    `
    ElisaBotMd.sendText(m.chat,menu)

 }

 break


 case 'g_links':{
    const menu=`Road to Dream
    🎓Telegram https://t.me/Road_to_Dream_OL
    

Road to Dream 2K22🎓
    🎓Group 1 https://chat.whatsapp.com/BAiJUWShLauKPrTcTh67E7

    🎓Group 2 https://chat.whatsapp.com/CVlfofJoNVj5a5fNrbSSoC
    

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ   
`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 case 'credits':{
    const menu=`⭕️මේ පේපර්ස් වලින් ගොඩක් ටිකක් ගත්තෙ Internet එකෙන්
ඒත් හැම පේපරයක්ම එක වෙබ්සයිට් එකක නෑ.🤯
එක එක ඒවා තියෙන්නෙ එක එක වෙබ් සයිට් වල.😑
සමහර පේපර්ස් හොයාගන්නත් නැතිවුනා...☹️
ඒව ටික හොයාගන්න  කලින් අවුරුදු වල අයියල අක්කල ටිකක් මේ වැඩේට ගොඩක් උදව් උනා.🤩🥰
ඒ පේපර් Cam scanner එකකින් ස්කෑන් කරලා සමහර පේපර් හැදුවේ.☺️
ඉතින් දැන් ඔයාට මේ Botව පාවිච්චි කරලා සියලුම OL පේපර්ස් ගැනීමේ හැකියාව ලබාදීලා තියනවා..😍
ඉතින් යාලුවනේ ඔයාලා ඔයාගෙ යාලුවො ඔක්කොටම මේක Share කරලා එයාලට හෙල්ප් එකක් දෙන්න.👽
මෙන්න මේ Website වලින් තමා ගොඩක් පේපර්ස් ගත්තේ..🙃(වෙන සයිට්වලින් ගත්තු ඒවත් ඇති😬)
    
    
    pastpapers.wiki
    pastpapers.lk
    olevelapi.com
    paperslanka.com
    agaram.lk
    e-thaksalawa.moe.gov.lk
    tamil.agaram.lk
    teachmore.lk
    
    
මේටික ඔක්කොම ඩවුන්ලෝඩ් කරලා එකතැනකට අරගෙන Bot කෙනෙක් Program කරන්න ගොඩක් මහන්සි උනා.🤯🥵
ඒ මහන්සියෙන් ඔයාලා ලොකු ප්‍රයෝජනයක් ගනීවි කියලා හිතනවා...!😊🥰
එහෙනම් කොල්ලනේ කෙල්ලනේ  OL සුපිරි ගේමක් ගහපල්ලා🤟💪
මම පසිදු සදරුවන්.🤗
    

*අන්තිමටත් කියන්න තියෙන්නෙ හැමෝටම Share කරලා එයාලටත් Help එකක් දෙන්න.!
(තනියෙන් ගොඩ ගිහින් වැඩක් නෑ. සෙට් එකත් එක්ක ගොඩ යමු)💪*

SL Real Tech (http://youtube.com/slrealtech) ඉදිරිපත් කිරීමක්!
    

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ
`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 //buddhism


 case 'buddhism':{
   const menu=`වර්ෂය තෝරන්න..!😎

   ✅2015 *bud_2015*
   ✅2016 *bud_2016*
   ✅2017 *bud_2017*
   ✅2018 *bud_2018*
   ✅2019 *bud_2019*
   ✅2020 *bud_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ
`
   ElisaBotMd.sendText(m.chat,menu)

}

break



case 'bud_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2.pdf'}, { quoted: m })

}
break

case 'bud_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2016-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2016-OL-BUDDHISM-PART-II.pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_part1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'bud_Part2.pdf'}, { quoted: m })

}
break



case 'bud_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2017-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2017.pdf'}, { quoted: m })

}
break




case 'bud_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2018-OL-BUDDHISM.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2018.pdf'}, { quoted: m })

}
break




case 'bud_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2019-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2019.pdf'}, { quoted: m })

}
break




case 'bud_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Buddhism/2020-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2020.pdf'}, { quoted: m })

}
break



//english

case 'english':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *eng_2015*
   ✅2016 *eng_2016*
   ✅2017 *eng_2017*
   ✅2018 *eng_2018*
   ✅2019 *eng_2019*
   ✅2020 *eng_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break



case 'eng_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2015-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2015.pdf'}, { quoted: m })

}
break
   

case 'eng_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2016-OL-English(ii).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2016-OL-English-(i).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2016_2.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2016_1.pdf'}, { quoted: m })

}
break



case 'eng_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2017-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2017.pdf'}, { quoted: m })

}
break


case 'eng_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2018-OL-English(i).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2018-OL-English(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2018_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2018_2.pdf'}, { quoted: m })

}
break





case 'eng_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2019-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2019.pdf'}, { quoted: m })

}
break





case 'eng_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/English/2020-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2020.pdf'}, { quoted: m })

}
break
   



//sinhala

case 'sinhala':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *sin_2015*
   ✅2016 *sin_2016*
   ✅2017 *sin_2017*
   ✅2018 *sin_2018*
   ✅2019 *sin_2019*
   ✅2020 *sin_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'sin_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2015-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2015.pdf'}, { quoted: m })

}
break
   
   
case 'sin_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2016-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2016.pdf'}, { quoted: m })

}
break



case 'sin_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2017-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2017.pdf'}, { quoted: m })

}
break



case 'sin_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2018-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2018.pdf'}, { quoted: m })

}
break


case 'sin_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2019-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2019.pdf'}, { quoted: m })

}
break


case 'sin_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Sinhala/2020-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2020.pdf'}, { quoted: m })

}
break


//history

case 'history':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *his_2015*
   ✅2016 *his_2016*
   ✅2017 *his_2017*
   ✅2018 *his_2018*
   ✅2019 *his_2019*
   ✅2020 *his_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'his_2015': {
 
   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2015-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2015.pdf'}, { quoted: m })

}
break



case 'his_2016': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2016-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2016.pdf'}, { quoted: m })

}
break


case 'his_2017': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2017-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2017-OL-History(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2017_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2017_2.pdf'}, { quoted: m })

}
break


case 'his_2018': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2018-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2018.pdf'}, { quoted: m })

}
break



case 'his_2019': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2019-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2019-OL-History(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2019_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2019_2.pdf'}, { quoted: m })

}
break



case 'his_2020': {

   let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/History/2020-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2020.pdf'}, { quoted: m })
}
break

//science

case 'science':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *sci_2015*
   ✅2016 *sci_2016*
   ✅2017 *sci_2017*
   ✅2018 *sci_2018*
   ✅2019 *sci_2019*
   ✅2020 *sci_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`




    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'sci_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Science/2015-OL-Science%20(i%2Cii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sci_2015'}, { quoted: m })
 
 }
 break



case 'sci_2016': {
 
     let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Science/2016-OL-Science%20(i%2Cii).pdf'
     ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sci_2016'}, { quoted: m })
  
  }
break



case 'sci_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Science/2017-OL-Science%20(i%2Cii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sci_2017'}, { quoted: m })
 
 }
break


case 'sci_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Science/2018-OL-SCIENCE%20(i).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sci_2018'}, { quoted: m })
 
 }
break



case 'sci_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Science/2019-OL-Science%20(i%2Cii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sci_2019'}, { quoted: m })
 
 }
break


case 'sci_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Science/2020-O-L-Science%20(i%2Cii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sci_2020'}, { quoted: m })
 
 }
break



case 'maths':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *maths_2015*
   ✅2016 *maths_2016*
   ✅2017 *maths_2017*
   ✅2018 *maths_2018*
   ✅2019 *maths_2019*
   ✅2020 *maths_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'maths_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2015-OL-Maths%20(i%2Cii%2Ciii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2015'}, { quoted: m })
 
 }
 break

 case 'maths_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2016-OL-Maths%20(i%2Cii%2Ciii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2016'}, { quoted: m })
 
 }
 break


 case 'maths_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2017-OL-Maths%20(i%2Cii%2Ciii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2017'}, { quoted: m })
 
 }
 break


 case 'maths_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2018-OL-Maths%20(i%2Cii%2Ciii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2018'}, { quoted: m })
 
 }
 break


 case 'maths_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2019-OL-Maths%20(i%2Cii%2Ciii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2019'}, { quoted: m })
 
 }
 break

 case 'maths_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Maths/2020-OL-Maths%20(i%2Cii%2Ciii).pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'maths_2020'}, { quoted: m })
 
 }
 break

		
		
		
		
		
		
		
case 'bas1':{
    const menu=`ඔබට අවශ්‍ය විශයය තෝරන්න..!😇

    🔴පුරවැසි අධ්‍යාපනය *civic*
    🔴කොමස් *commerce*
    🔴භූගෝල විද්‍යාව *geography*
    🔴දෙමළ *tamil*

    
t.me/pastpapersolbot 👈On Telegram

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break



 case 'bas2':{
    const menu=`ඔබට අවශ්‍ය විශයය තෝරන්න..!😇

    🔴චිත්‍ර *art*
    🔴නැටුම් *dance*
    🔴සංගීතය(පෙරදිග) *music_o*
    🔴නාට්‍ය *drama*
    🔴සිංහල රසාස්වාදය *lit_si*
    🔴ඉංග්‍රීසි රසාස්වාදය *lit_en*
    

t.me/pastpapersolbot 👈On Telegram

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break



 case 'bas3':{
    const menu=`ඔබට අවශ්‍ය විශයය තෝරන්න..!😇

    🔴කෘෂිකර්මය *agri*
    🔴සෞඛ්‍ය *health*
    🔴ගෘහ විද්‍යාව *home_econ*
    🔴ICT *ict*
    🔴මාධ්‍ය අධ්‍යනය *media*
    

t.me/pastpapersolbot 👈On Telegram

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break



//1bas
//civic

case 'civic':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *civic_2015*
   ✅2016 *civic_2016*
   ✅2017 *civic_2017*
   ✅2018 *civic_2018*
   ✅2019 *civic_2019*
   ✅2020 *civic_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'civic_2015': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2015-OL-Civic%20Education(i).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2015-OL-Civic%20Education(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-civic_2015'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-civic_2015'}, { quoted: m })
 
 }
 break

 case 'civic_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2016-OL-Civic%20Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'civic_2016'}, { quoted: m })
 
 }
 break

 case 'civic_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2017-OL-Civic%20Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'civic_2017'}, { quoted: m })
 
 }
 break
 case 'civic_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2018-OL-Civic%20Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'civic_2018'}, { quoted: m })
 
 }
 break


 case 'civic_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2019-OL-Civic%20Education(i).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2019-OL-Civic%20Education(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-civic_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-civic_2019'}, { quoted: m })
 
 }
 break


 case 'civic_2020': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2020-OL-Civic%20Education(i).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Civic%20Education/2020-OL-Civic%20Education(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-civic_2020'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-civic_2020'}, { quoted: m })
 
 }
 break

//commerce

case 'commerce':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *cmz_2015*
   ✅2016 *cmz_2016*
   ✅2017 *cmz_2017*
   ✅2018 *cmz_2018*
   ✅2019 *cmz_2019*
   ✅2020 *cmz_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'cmz_2015': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2015-OL-COMMERCE(i).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2015-OL-COMMERCE(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-cmmerce_2015'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-cmmerce_2015'}, { quoted: m })
 
 }
 break
 case 'cmz_2016': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2016-OL-COMMERCE(i).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2016-OL-COMMERCE(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-cmmerce_2016'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-cmmerce_2016'}, { quoted: m })
 
 }
 break
 case 'cmz_2017': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2017-OL-COMMERCE(ii).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2017-OL-COMMERCE(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-cmmerce_2017'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-cmmerce_2017'}, { quoted: m })
 
 }
 break
 case 'cmz_2018': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2018-OL-COMMERCE(ii).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2018-OL-COMMERCE(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-cmmerce_2018'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-cmmerce_2018'}, { quoted: m })
 
 }
 break
 case 'cmz_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2019-OL-COMMERCE(ii).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2019-OL-COMMERCE(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-cmmerce_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-cmmerce_2019'}, { quoted: m })
 
 }
 break

case 'cmz_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Commerce/2020-OL-COMMERCE.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'cmmerce_2020'}, { quoted: m })
 
 }
 break

//geography


case 'geography':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *geo _2015*
   ✅2016 *geo _2016*
   ✅2017 *geo _2017*
   ✅2018 *geo _2018*
   ✅2019 *geo _2019*
   ✅2020 *geo _2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break



case 'geo_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2015-OL-Geography.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'geography_2015'}, { quoted: m })
 
 }
 break
 
 case 'geo_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2016-OL-Geography.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'geography_2016'}, { quoted: m })
 
 }
 break
 case 'geo_2017': {
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2017-OL-Geography.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'geography_2017'}, { quoted: m })
 
 }
 break
 case 'geo_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2018-OL-Geography.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'geography_2018'}, { quoted: m })
 
 }
 break

 case 'geo_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2019-OL-Geography(i).pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2019-OL-Geography(ii).pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-geography_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-geography_2019'}, { quoted: m })
 
 }
 break
 
 case 'geo_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Geography/2020-OL-Geography.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'geography_2020'}, { quoted: m })
 
 }
 break
    
//tamil


case 'tamil':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *tamil_2015*
   ✅2016 *tamil_2016*
   ✅2017 *tamil_2017*
   ✅2018 *tamil_2018*
   ✅2019 *tamil_2019*
   ✅2020 *tamil_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break




case 'tamil_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Tamil/2015-OL-Tamil.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'tamil_2015'}, { quoted: m })
 
 }
 break
 

 case 'tamil_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Tamil/2016-OL-Tamil.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'tamil_2016'}, { quoted: m })
 
 }
 break
 

 case 'tamil_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Tamil/2017-OL-Tamil.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'tamil_2017'}, { quoted: m })
 
 }
 break
 

 case 'tamil_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Tamil/2018-OL-Tamil.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'tamil_2018'}, { quoted: m })
 
 }
 break
 

 case 'tamil_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Tamil/2019-OL-Tamil.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'tamil_2019'}, { quoted: m })
 
 }
 break
 

 case 'tamil_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/First%20basket%20subjects/Tamil/2020-OL-Tamil.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'tamil_2020'}, { quoted: m })
 
 }
 break
 
 //bas2
 //art
 case 'art':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2016 *art_2016*
   ✅2017 *art_2017*
   ✅2018 *art_2018*
   ✅2019 *art_2019*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break
 



case 'art_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Art/2017-OL-Art.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'art_2017'}, { quoted: m })
 
 }
 break
 
 case 'art_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Art/2016-OL-Art.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'art_2016'}, { quoted: m })
 
 }
 break
 
 case 'art_2018': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Art/2018-OL-Art-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Art/2018-OL-Art-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-art_2018'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-art_2018'}, { quoted: m })
 
 }
 break
 
 case 'art_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Art/2019-OL-Art-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Art/2019-OL-Art-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-art_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-art_2019'}, { quoted: m })
 
 }
 break
 
 case 'art_2015':{
    const menu=`2015 චිත්‍ර Paper එක නෑනේහ්😕 ඔයාලා අතේ තියේනම් ඒක ඇඩ්මින්ට එවන්න🥰`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'art_2020':{
    const menu=`2020 චිත්‍ර Paper එක නෑනේහ්😕 ඔයාලා අතේ තියේනම් ඒක ඇඩ්මින්ට එවන්න🥰`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

//dance

case 'dance':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *dance_2015*
   ✅2016 *dance_2016*
   ✅2017 *dance_2017*
   ✅2018 *dance_2018*
   ✅2019 *dance_2019*
   ✅2020 *dance_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'dance_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Dance/Oriental%20Dancing/2015-OL-Dancing.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'dance_2015'}, { quoted: m })
 
 }
 break
 case 'dance_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Dance/Oriental%20Dancing/2016-OL-Dancing.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'dance_2016'}, { quoted: m })
 
 }
 break
 case 'dance_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Dance/Oriental%20Dancing/2017-OL-Dancing.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'dance_2017'}, { quoted: m })
 
 }
 break
 case 'dance_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Dance/Oriental%20Dancing/2018-OL-Dancing.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'dance_2018'}, { quoted: m })
 
 }
 break
 case 'dance_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Dance/Oriental%20Dancing/2019-Dancing-OL.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'dance_2019'}, { quoted: m })
 
 }
 break
 case 'dance_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Dance/Oriental%20Dancing/2020-OL-Dancing.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'dance_2020'}, { quoted: m })
 
 }
 break
      

//drama


case 'drama':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *drama_2015*
   ✅2016 *drama_2016*
   ✅2017 *drama_2017*
   ✅2018 *drama_2018*
   ✅2019 *drama_2019*
   ✅2020 *drama_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'drama_2015': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2015-OL-DRAMA-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2015-OL-DRAMA-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-drama_2015'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-drama_2015'}, { quoted: m })
 
 }
 break

 case 'drama_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2016-OL-Drama.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'drama_2016'}, { quoted: m })
 
 }
 break
 
 

 

 case 'drama_2017': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2017-OL-DRAMA-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2017-OL-DRAMA-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-drama_2017'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-drama_2017'}, { quoted: m })
 
 }
 break


 case 'drama_2018': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2018-OL-DRAMA-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2018-OL-DRAMA-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-drama_2018'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-drama_2018'}, { quoted: m })
 
 }
 break


 case 'drama_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2019-OL-DRAMA-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2019-OL-DRAMA-PART-II.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-drama_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-drama_2019'}, { quoted: m })
 
 }
 break


 case 'drama_2020': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2020-OL-DRAMA-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Drama/2020-OL-DRAMA-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-drama_2020'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-drama_2020'}, { quoted: m })
 
 }
 break

//lit_si
 case 'lit_si':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *lit_si_2015*
   ✅2016 *lit_si_2016*
   ✅2017 *lit_si_2017*
   ✅2018 *lit_si_2018*
   ✅2019 *lit_si_2019*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'lit_si_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/Sinhala/%E0%B7%83%E0%B7%92%E0%B6%82%E0%B7%84%E0%B6%BD%20%E0%B6%BB%E0%B7%83%E0%B7%8F%E0%B7%83%E0%B7%8A%E0%B7%80%E0%B7%8F%E0%B6%AF%E0%B6%BA%202015%20.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_si_2015'}, { quoted: m })
 
 }
 break

 case 'lit_si_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/Sinhala/%E0%B6%BB%E0%B7%83%E0%B7%8F%E0%B7%83%E0%B7%8A%E0%B7%80%E0%B7%8F%E0%B6%AF%E0%B6%BA%202016%20.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_si_2016'}, { quoted: m })
 
 }
 break

 case 'lit_si_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/Sinhala/2017%20lit%20ol.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_si_2017'}, { quoted: m })
 
 }
 break

 case 'lit_si_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/Sinhala/%E0%B7%83%E0%B7%92%E0%B6%82%E0%B7%84%E0%B6%BD%20%E0%B6%BB%E0%B7%83%E0%B7%8F%E0%B7%83%E0%B7%8A%E0%B7%80%E0%B7%8F%E0%B6%AF%E0%B6%BA%202018%20.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_si_2018'}, { quoted: m })
 
 }
 break

 case 'lit_si_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/Sinhala/%E0%B7%83%E0%B7%92%E0%B6%82%E0%B7%84%E0%B6%BD%20%E0%B6%BB%E0%B7%83%E0%B7%8F%E0%B7%83%E0%B7%8A%E0%B7%80%E0%B7%8F%E0%B6%AF%E0%B6%BA%202019.PDF'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_si_2019'}, { quoted: m })
 
 }
 break


//lit_en


case 'lit_en':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *lit_en_2015*
   ✅2016 *lit_en_2016*
   ✅2017 *lit_en_2017*
   ✅2018 *lit_en_2018*
   ✅2019 *lit_en_2019*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'lit_en_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/English/2015-OL-ENGLISH.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_en_2015'}, { quoted: m })
 
 }
 break
 

 case 'lit_en_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/English/2016%20English%20Literary.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_en_2016'}, { quoted: m })
 
 }
 break
 

 case 'lit_en_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/English/2017%20Appreciation%20of%20English%20Literary.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_en_2017'}, { quoted: m })
 
 }
 break
 

 case 'lit_en_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/English/2018%20Appreciation%20of%20English%20Literary.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_en_2018'}, { quoted: m })
 
 }
 break
 

 case 'lit_en_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Literary%20Subjects/English/2019-OL-ENGLISH-LITERATURE.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'lit_en_2019'}, { quoted: m })
 
 }
 break
 
     

//music_o


case 'music_o':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *music_o_2015*
   ✅2016 *music_o_2016*
   ✅2017 *music_o_2017*
   ✅2018 *music_o_2018*
   ✅2019 *music_o_2019*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'music_o_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Music/Oriental%20Music/2015-OL-Music-Oriental.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'Music 2015'}, { quoted: m })
 
 }
 break


 case 'music_o_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Music/Oriental%20Music/2016-OL-Music-Oriental.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'music 2016'}, { quoted: m })
 
 }
 break
 
 case 'music_o_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Music/Oriental%20Music/2017-OL-Music-Oriental.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'music 2017'}, { quoted: m })
 
 }
 break

 case 'music_o_2018': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Music/Oriental%20Music/2018-OL-MUSIC-ORIENTAL-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Music/Oriental%20Music/2018-OL-MUSIC-ORIENTAL-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-music 2018'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-music 2018'}, { quoted: m })
 
 }
 break
 
 
 case 'music_o_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Second%20basket%20subjects/Music/Oriental%20Music/2019-OL-Music-Oriental.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'music 2019'}, { quoted: m })
 
 }
 break


//bas3
//agri

case 'agri':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *agri_2015*
   ✅2016 *agri_2016*
   ✅2017 *agri_2017*
   ✅2018 *agri_2018*
   ✅2019 *agri_2019*
   ✅2020 *agri_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'agri_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Agriculture/2015-OL-Agriculture-amp-Food-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'agri_2015'}, { quoted: m })
 
 }
 break

 
case 'agri_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Agriculture/2016-OL-Agriculture-amp-Food-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'agri_2016'}, { quoted: m })
 
 }
 break

 
case 'agri_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Agriculture/2017-OL-Agriculture-amp-Food-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'agri_2017'}, { quoted: m })
 
 }
 break

 
case 'agri_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Agriculture/2018-OL-Agriculture-And-Food-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'agri_2018'}, { quoted: m })
 
 }
 break

 
 case 'agri_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Agriculture/2019%20Agri.%20_%20Food%20Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'agri_2019'}, { quoted: m })
 
 }
 break


  
case 'agri_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Agriculture/2020-OL-Agriculture-and-Food-Tech.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'agri_2020'}, { quoted: m })
 
 }
 break


//health

case 'health':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *health_2015*
   ✅2016 *health_2016*
   ✅2017 *health_2017*
   ✅2018 *health_2018*
   ✅2019 *health_2019*
   ✅2020 *health_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'health_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2015-OL-Health-amp-physical-Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'health_2015'}, { quoted: m })
 
 }
 break

 case 'health_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2016-OL-Health-amp-Physical-Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'health_2016'}, { quoted: m })
 
 }
 break

 case 'health_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2017-OL-Health-amp-Physical-Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'health_2017'}, { quoted: m })
 
 }
 break

 case 'health_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2018-OL-Health-amp-Physical-Education.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'health_2018'}, { quoted: m })
 
 }
 break

 case 'health_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2019-OL-HEALTH-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2019-OL-HEALTH-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-health_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-health_2019'}, { quoted: m })
 
 }
 break    

 
case 'health_2020': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2020-OL-HEALTH-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Health/2020-OL-HEALTH-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-health_2020'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-health_2020'}, { quoted: m })
 
 }
 break

//home_icon
case 'home_econ':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *home_2015*
   ✅2016 *home_2016*
   ✅2017 *home_2017*
   ✅2018 *home_2018*
   ✅2019 *home_2019*
   ✅2020 *home_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break

case 'home_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2015-OL-Home-Economics.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'home_2015'}, { quoted: m })
 
 }
 break
 

 case 'home_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2016-OL-Home-Economics.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'home_2016'}, { quoted: m })
 
 }
 break
 

 case 'home_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2017-OL-Home-Economics.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'home_2017'}, { quoted: m })
 
 }
 break
 

 case 'home_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2018-OL-Home-Economics.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'home_2018'}, { quoted: m })
 
 }
 break
 

 case 'home_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2019-OL-HOME-ECONOMICS-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2019-OL-HOME-ECONOMICS-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-home_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-home_2019'}, { quoted: m })
 
 }
 break

 case 'home_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Home%20Economics/2020-OL-Home-Science.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'home_2020'}, { quoted: m })
 
 }
 break
 
     

//ict

case 'ict':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *ict_2015*
   ✅2016 *ict_2016*
   ✅2017 *ict_2017*
   ✅2018 *ict_2018*
   ✅2019 *ict_2019*
   ✅2020 *ict_2020*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'ict_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2015-OL-Information-amp-Communication-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'ict_2015'}, { quoted: m })
 
 }
 break
 

 case 'ict_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2016-OL-Information-amp-Communication-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'ict_2016'}, { quoted: m })
 
 }
 break
 

 case 'ict_2017': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2017-OL-Information-amp-Communication-Technology.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'ict_2017'}, { quoted: m })
 
 }
 break
 
case 'ict_2018': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2018-OL-ICT-PART-I.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2018-OL-ICT-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-ict_2018'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-ict_2018'}, { quoted: m })
 
 }
 break
 

 case 'ict_2019': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2019-OL-INFORMATION-AND-COMMUNICATION-TECHNOLOGY-PART-I-.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2019-OL-INFORMATION-AND-COMMUNICATION-TECHNOLOGY-PART-II.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-ict_2019'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-1ct_2019'}, { quoted: m })
 
 }
 break
 
  

 case 'ict_2020': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/ICT/2020-OL-ICT.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'ict_2020'}, { quoted: m })
 
 }
 break
 
    
//media

case 'media':{
    const menu=`වර්ෂය තෝරන්න..!😎
  
   ✅2015 *media_2015*
   ✅2016 *media_2016*
   ✅2017 *media_2017*
   ✅2018 *media_2018*
   ✅2019 *media_2019*
   

Ⓒᴾᵃˢᵗ ᴾᵃᵖᵉʳˢ ᴼᴸ ᵇᵒᵗ ᵇʸ ᴾᵃˢⁱⁿᵈᵘ ˢᵃⁿᵈᵃʳᵘʷᵃⁿ`
    ElisaBotMd.sendText(m.chat,menu)

 }

break


case 'media_2015': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Media/2015.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'media_2015'}, { quoted: m })
 
 }
 break
 

 case 'media_2016': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Media/2016.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'media_2016'}, { quoted: m })
 
 }
 break
 


 case 'media_2017': {
 
    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Media/2017-1.pdf'
    let PAPER2 = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Media/2017.pdf'
 
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1-media_2017'}, { quoted: m })
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2-media_2017'}, { quoted: m })
 
 }
 break
 



 case 'media_2018': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Media/2018.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'media_2018'}, { quoted: m })
 
 }
 break
 

 case 'media_2019': {

    let PAPER = 'https://github.com/SL-Real-Tech/Files/raw/main/Past-Papers/Third%20basket%20subjects/Media/2019.pdf'
    ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'media_2019'}, { quoted: m })
 
 }
 break
		
		
		
case 'unmute': {		
if (!m.isGroup) retrun
 if (!isBotAdmins) return 
 if (!isAdmins) return
await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement')
	reply(`සමූහය විවෘත කරල ලදී!`)
}     
break
case 'mute': {
if (!m.isGroup) retrun
 if (!isBotAdmins) return 
  if (!isAdmins) return	
await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement')
reply(`සමූහය වසා දමන ලදී!`)	
}
break
	default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ElisaBotMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
