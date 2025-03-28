const { zokou } = require('../framework/zokou');
const axios = require("axios");

zokou({
  nomCom: "spotifylist",
  aliases: ["spotifysearch", "splaylist"],
  categorie: "search",
  reaction: "💎"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;

  // Check if there is a query in the arguments
  if (!arg[0]) {
    return repondre('Please provide a query!');
  }

  try {
    // Spotify search API
    const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(arg[0])}`;
    const searchData = (await axios.get(searchApiUrl)).data;

    // Check if searchData contains tracks
    if (!searchData || searchData.length === 0) {
      return repondre("No Spotify search results found.");
    }

    // Construct playlist message
    let playlistMessage = `PKXMD-BOT 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓\n\n`;

    // Loop through search results and construct track info with numbers
    searchData.forEach((track, index) => {
      const trackNumber = index + 1; // Number tracks starting from 1
      playlistMessage += `*┃${trackNumber}.* ${track.title}\n`;
      playlistMessage += `*┃Artist*: ${track.artist || "Unknown"}\n`;
      playlistMessage += `*┃Album*: ${track.album || "Unknown"}\n`;
      playlistMessage += `*┃URL*: ${track.url}\n\n`;
      playlistMessage += `───────────────────◆\n\n`;
    });

    // Send the playlist message with a mention of the sender
    await zk.sendMessage(
      dest,
      {
        text: playlistMessage,
        contextInfo: {
          mentionedJid: [dest],  // Mention the sender's JID
          externalAdReply: {
            showAdAttribution: true,
            title: "PKXMD-BOT SPOTIFY LIST",
            body: "Powered by pk tech",
            sourceUrl: "https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x",
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      }
    );

  } catch (error) {
    // Send error message
    repondre(`Error: ${error.message}`);
    console.error(error);
  }
});
