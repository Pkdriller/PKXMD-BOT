const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping2",
    alias: ["speed", "pong", "p"],
    use: '.ping',
    desc: "Check bot's response time with a VIP touch.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🚛', '🚚', '🚜', '🚒', '🚐', '🛻', '🚗', '🚙', '🏎️', '🏍️'];
        const textEmojis = ['🚁', '🛸', '⚡️', '🚀', '🛩️', '🎠', '🚍', '🚔', '🚘', '🚖'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start); // Response time in milliseconds

        // VIP style speed response
        const text = `*CASEYRHODES-XMD SERVER SPEED:* 🐦‍🔥  
🚀 *Response Time:* ${responseTime}ms ${reactionEmoji}  
👑 *Status:* Ultra-Fast 🦅`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`❌ *Error:* ${e.message}`);
    }
});

