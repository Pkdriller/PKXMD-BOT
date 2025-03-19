function hi() {
  console.log("Hello World!");
}
hi();
function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const axios = require("axios");
cmd({
  'pattern': "video2",
  'alias': ["ytvid2", "ytv2", "ytvideo2"],
  'react': '⏳',
  'desc': "Download videos from YouTube by searching for keywords.",
  'category': "video",
  'use': ".vidx <keywords>",
  'filename': __filename
}, async (_0xe2f6b0, _0xc0bd08, _0x122f70, {
  from: _0x4938ec,
  args: _0x545fb3,
  reply: _0x290209
}) => {
  try {
    const _0x32deeb = _0x545fb3.join(" ");
    if (!_0x32deeb) {
      return _0x290209("*Please provide a video tital or url*");
    }
    _0x290209("> © ᴄᴀsᴇʏʀʜᴏᴅᴇs xᴍʀ ɢᴇɴᴇʀᴀᴛɪɴɢ ᴠɪᴅᴇᴏ ᴘʟᴇᴀsᴇ ᴘᴀɪᴛ...");
    const _0x5e6ce9 = await yts(_0x32deeb);
    if (!_0x5e6ce9.videos || _0x5e6ce9.videos.length === 0x0) {
      return _0x290209("❌ No results found for \"" + _0x32deeb + "\".");
    }
    const _0x8cec1e = _0x5e6ce9.videos[0x0];
    const _0x5ce282 = _0x8cec1e.url;
    const _0x2af2d2 = "https://apis.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=" + _0x5ce282;
    const _0x442320 = await axios.get(_0x2af2d2);
    if (!_0x442320.data.success) {
      return _0x290209("❌ Failed to fetch video for \"" + _0x32deeb + "\".");
    }
    const {
      download_url: _0x503033
    } = _0x442320.data.result;
    await _0xe2f6b0.sendMessage(_0x4938ec, {
      'video': {
        'url': _0x503033
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0xc0bd08
    });
  } catch (_0x3da04a) {
    console.error(_0x3da04a);
    _0x290209("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "play2",
  'alias': ["yta2", "ytplay2"],
  'react': '⏳',
  'desc': "Download audio from YouTube by searching for keywords.",
  'category': "music",
  'use': ".playx <keywords>",
  'filename': __filename
}, async (_0x1014d1, _0x44f57d, _0x281123, {
  from: _0x22ebe3,
  args: _0x445711,
  reply: _0x377273
}) => {
  try {
    const _0x356223 = _0x445711.join(" ");
    if (!_0x356223) {
      return _0x377273("*Please provide a audio title or url*");
    }
    _0x377273("> © cαѕєчrhσdєѕ íѕ gєnєrαtíng чσur ѕσng wqít....");
    const _0x271698 = await yts(_0x356223);
    if (!_0x271698.videos || _0x271698.videos.length === 0x0) {
      return _0x377273("❌ No results found for \"" + _0x356223 + "\".");
    }
    const _0x4360a6 = _0x271698.videos[0x0];
    const _0x57ffbc = _0x4360a6.url;
    const _0x3af9d4 = "https://apis.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=" + _0x57ffbc;
    const _0x1d283c = await axios.get(_0x3af9d4);
    if (!_0x1d283c.data.success) {
      return _0x377273("❌ Failed to fetch audio for \"" + _0x356223 + "\".");
    }
    const {
      download_url: _0x3a6e3b
    } = _0x1d283c.data.result;
    await _0x1014d1.sendMessage(_0x22ebe3, {
      'audio': {
        'url': _0x3a6e3b
      },
      'mimetype': "audio/mp4",
      'ptt': false
    }, {
      'quoted': _0x44f57d
    });
  } catch (_0x274411) {
    console.error(_0x274411);
    _0x377273("❌ An error occurred while processing your request.");
  }
});
