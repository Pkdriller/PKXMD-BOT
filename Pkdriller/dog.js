const {
   zokou
} = require('../framework/zokou");

zokou({
   nomCom: "dog",
   categorie: "fun",
   reaction: "🙄",
   desc: "Send videos of randome dogs!
   filename: __filename,
},
   async (dest, zk, commandeOptions) => {
      try {
         const fetch = require("node-fetch");
         let res = await fetch('https://random.dog/woof.json')
         let json = await res.json()
         if (json.status) return await m.reply("*Request Denied!*")
         m.bot.sendFileUrl(m.jid, json.url, "", m, { author: "Asta-Md" }, "video");

      } catch (e) { m.error(`${e}\n\nCommand: dog`, e, false) }
   });
