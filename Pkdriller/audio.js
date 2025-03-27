const fs = require('fs');
const { exec } = require('child_process');
const { getRandom } = require('../../lib/myfunc');
const { toAudio, toPTT } = require('../../lib/converter');

const processAudio = async ({ Cypher, m, reply, prefix, command, filter }) => {
  try {
    const quoted = m.quoted ? m.quoted : null;
    const mime = quoted?.mimetype || "";

    if (!quoted || !/audio/.test(mime)) {
      return reply(`Reply to an *audio file* with *${prefix + command}* to modify it.`);
    }

    const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
    const outputPath = getRandom('.mp3');

    exec(`ffmpeg -i ${mediaPath} ${filter} ${outputPath}`, (error) => {
      fs.unlinkSync(mediaPath);
      if (error) return reply(error.toString());

      const audioBuffer = fs.readFileSync(outputPath);
      Cypher.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    reply(err.toString());
  }
};

module.exports = [
  {
    command: ['bass'],
    operate: async ({ Cypher, m, reply, prefix, command }) => {
      await processAudio({ Cypher, m, reply, prefix, command, filter: "-af equalizer=f=54:width_type=o:width=2:g=20" });
    }
  },
  {
    command: ['blown'],
    operate: async ({ Cypher, m, reply, prefix, command }) => {
      await processAudio({ Cypher, m, reply, prefix, command, filter: "-af acrusher=.1:1:64:0:log" });
    }
  },
  {
    command: ['deep'],
    operate: async ({ Cypher, m, reply, prefix, command }) => {
      await processAudio({ Cypher, m, reply, prefix, command, filter: "-af atempo=4/4,asetrate=44500*2/3" });
    }
  },
  {
    command: ['earrape'],
    operate: async ({ Cypher, m, reply, prefix, command }) => {
      await processAudio({ Cypher, m, reply, prefix, command, filter: "-af volume=12" });
    }
  },
  {
    command: ['reverse'],
    operate: async ({ Cypher, m, reply, prefix, command }) => {
      await processAudio({ Cypher, m, reply, prefix, command, filter: '-filter_complex "areverse"' });
    }
  },
  {
    command: ['robot'],
    operate: async ({ Cypher, m, reply, prefix, command }) => {
      await processAudio({
        Cypher, m, reply, prefix, command,
        filter: '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
      });
    }
  },
  {
    command: ['volaudio'],
    operate: async ({ Cypher, m, reply, args, prefix, command }) => {
      const quoted = m.quoted ? m.quoted : null;
      const mime = quoted?.mimetype || "";

      if (!args.length) return reply(`*Example: ${prefix + command} 10*`);
      if (!quoted || !/audio/.test(mime)) return reply(`Reply to an *audio file* with *${prefix + command}* to adjust volume.`);

      const mediaPath = await Cypher.downloadAndSaveMediaMessage(quoted);
      const outputPath = getRandom('.mp3');

      exec(`ffmpeg -i ${mediaPath} -filter:a volume=${args[0]} ${outputPath}`, (error) => {
        fs.unlinkSync(mediaPath);
        if (error) return reply("*Error!*");

        const modifiedAudio = fs.readFileSync(outputPath);
        Cypher.sendMessage(m.chat, { audio: modifiedAudio, mimetype: "audio/mp4", ptt: true }, { quoted: m });
        fs.unlinkSync(outputPath);
      });
    }
  },
{
  command: ['tomp3'],
  operate: async ({ Cypher, m, reply }) => {
  const quoted = m.quoted ? m.quoted : null;
  const mime = quoted?.mimetype || "";
    if (!quoted) return reply('*Reply to a voice note to convert it to mp3 audio!*');

  if (!/audio/.test(mime)) return reply('*Only voice messages can be converted to audio!*');

    try {
      let buffer = await quoted.download();
      let converted = await toAudio(buffer, 'mp3');

      await Cypher.sendMessage(m.chat, { audio: converted.data, mimetype: 'audio/mpeg' }, { quoted: m });
      await converted.delete();
    } catch (e) {
      console.error(e);
       reply(global.mess.error);
    }
  }
},
{
  command: ['toptt', 'tovn'],
  operate: async ({ Cypher, m, reply }) => {
  const quoted = m.quoted ? m.quoted : null;
  const mime = quoted?.mimetype || "";
    if (!quoted) return reply('*Reply to an audio file to convert it to voice note!*');
    if (!/audio/.test(mime)) return reply('*Only audio files can be converted to voice notes!*');

    try {
      let buffer = await quoted.download();
      let converted = await toPTT(buffer, 'mp3');

      await Cypher.sendMessage(m.chat, { audio: converted.data, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m });
      await converted.delete();
    } catch (e) {
      console.error(e);
      reply(global.mess.error);
    }
  }
},
];