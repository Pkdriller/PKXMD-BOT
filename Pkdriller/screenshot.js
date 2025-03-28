


const axios = require("axios");
const config = require('../config');
const { cmd } = require('../command');

cmd({
  pattern: "ss",
  alias: ["ssweb"],
  react: "🚀",
  desc: "Download screenshot of a given link.",
  category: "other",
  use: ".ss <link>",
  filename: __filename,
}, 
async (conn, mek, m, {
  from, l, quoted, body, isCmd, command, args, q, isGroup, sender, 
  senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, 
  groupMetadata, groupName, participants, isItzcp, groupAdmins, 
  isBotAdmins, isAdmins, reply 
}) => {
  if (!q) {
    return reply("Please provide a URL to capture a screenshot.");
  }

  try {
    
    const response = await axios.get(`https://bk9.fun/tools/screenshot?device=tablet&url= ${q}`);
    const screenshotUrl = response.data.screenshotUrl;

    // give credit and use
    const imageMessage = {
      image: { url: screenshotUrl },
      caption: "*BRIGHT SS WEB*\n\n> *© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ʙᴜᴍʙʟᴇʙᴇᴇ-xᴍᴅ🎗️*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363318387454868@newsletter',
          newsletterName: "𝘽𝙪𝙢𝙗𝙡𝙚𝙗𝙚𝙚-𝙓𝙈𝘿 🍁",
          serverMessageId: 143,
        },
      },
    };

    await conn.sendMessage(from, imageMessage, { quoted: m });
  } catch (error) {
    console.error(error);
    reply("Failed to capture the screenshot. Please try again.");
  }
});
