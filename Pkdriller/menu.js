const { cmd, commands } = require('../command');
const config = require('../config')

cmd({
    pattern: "downmenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *PKXMD-BOT DOWNLOAD COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};

let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/24b19e11c51c3b8dde0a1.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "searchmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *PKXMD-BOT SEARCH COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/0daa736951473c130e73f.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "convertmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *PKXMD-BOT CONVERT COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/0daa736951473c130e73f.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: "logomenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *PKXMD-BOT LOGO COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/5e61a90b90c6307a0757e.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
  pattern: "ownermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   *PKXMD-BOT OWNER COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/787b6b23e75057e08e69b.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})



cmd({
  pattern: "adminmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   * PKXMD-BOT ADMIN COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'admin'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/7f48f7bbbe85de4532d71.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})


cmd({
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*● ══════════════ ●*

   * PKXMD-BOT OTHER COMMANDS MENU*\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'PKXMD-BOT ꜱᴘᴇᴇᴅ'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://telegra.ph/file/01994d1adb2fe606c3dd2.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ◎ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})
 
