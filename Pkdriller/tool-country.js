const config = require('../config');
const { cmd, commands } = require('../command');
const axios = require("axios");

cmd({
  pattern: "country",

  alias: ["countryinfo", "cinfo"],
  react: "🌍",
  desc: "Get information about a country, including its flag, capital, and more.",
  category: "utility",
  use: ".country <country_name>",
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const countryName = args.join(" ");
    if (!countryName) {
      return reply("*🏷️ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴄᴏᴜɴᴛʀʏ ɴᴀᴍᴇ. ᴇxᴀᴍᴘʟᴇ:* `.ᴄᴏᴜɴᴛʀʏ ᴘᴀᴋɪsᴛᴀɴ`");
    }

    // Fetch country information from the API
    const response = await axios.get(`https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(countryName)}`);
    const { status, data } = response.data;

    if (!status || !data) {
      return reply("❌ No information found for the specified country. Please try again.");
    }

    const {
      name,
      capital,
      flag,
      phoneCode,
      googleMapsLink,
      continent,
      coordinates,
      area,
      landlocked,
      languages,
      famousFor,
      constitutionalForm,
      neighbors,
      currency,
      drivingSide,
      alcoholProhibition,
      internetTLD,
      isoCode,
    } = data;

    // Format the country information message
    const countryMessage = `\*\`ု᪳𝐀𝐋𝐈-𝐌𝐃 𝐂𝐎𝐔𝐍𝐓𝐑𝐘 𝐈𝐍𝐅𝐎ှ᪳\`\*\n\n
🌍 *ᴄᴏᴜɴᴛʀʏ*: ${name}
🏛️ *ᴄᴀᴘɪᴛᴀʟ*: ${capital}
☎️ *ɴᴜᴍʙᴇʀ ᴄᴏᴅᴇ*: ${phoneCode}
📍 *ᴄᴏɴᴛɪɴᴇɴᴛ*: ${continent.name} ${continent.emoji}
🌐 *ɢᴏᴏɢʟᴇ ᴍᴀᴘs*: ${googleMapsLink}
📏 *ᴀʀᴇᴀ*: ${area.squareKilometers} km² (${area.squareMiles} mi²)
🚗 *ᴅʀɪᴠɪɴɢ sɪᴅᴇ*: ${drivingSide}
🍺 *ᴀʟᴄᴏʜᴏʟ ᴘʀᴏʜɪʙɪᴛɪᴏɴ*: ${alcoholProhibition}
💻 *ɪɴᴛᴇʀɴᴇᴛ ᴛʟᴅ*: ${internetTLD}
💰 *ᴄᴜʀʀᴇɴᴄʏ*: ${currency}
📜 *ᴄᴏɴsᴛɪᴛᴜᴛɪᴏɴᴀʟ Form*: ${constitutionalForm}
🗣️ *ʟᴀɴɢᴜᴀɢᴇs*: ${languages.native.join(", ")} (${languages.codes.join(", ")})
🌟 *ғᴀᴍᴏᴜs ғᴏʀ*: ${famousFor}
🧭 *ᴄᴏᴏʀᴅɪɴᴀᴛᴇs*: Latitude ${coordinates.latitude}, Longitude ${coordinates.longitude}
🛂 *ɪsᴏ ᴄᴏᴅᴇ*: ${isoCode.alpha2} (${isoCode.alpha3}, ${isoCode.numeric})
    `;

    // Send the country information message with the flag as an image attachment
    await conn.sendMessage(from, {
      image: { url: flag }, // Attach the flag image
      caption: countryMessage, // Add the formatted message as caption
    });
  } catch (error) {
    console.error("Error fetching country information:", error);
    reply("❌ Unable to fetch country information. Please try again later.");
  }
});
  
