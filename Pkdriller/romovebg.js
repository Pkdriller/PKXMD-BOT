
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { removeBackgroundFromImageFile } from 'remove.bg';
import config from '../config.cjs';

const tourl = async (m, gss) => {
  // Use the full message body without any prefix handling
  const text = m.body.trim();
  // Split the text into words and extract the first word as the command
  const parts = text.split(" ");
  const cmd = parts[0].toLowerCase();

  const validCommands = ['removebg', 'nobg'];

  if (!validCommands.includes(cmd)) return; // Only trigger on valid commands

  // Check if a quoted image is present
  if (!m.quoted || m.quoted.mtype !== 'imageMessage') {
    return m.reply(`> Send/Reply with an image to remove your picture background\n*Example: removebg*`);
  }

  // Choose a random API key from the list
  const apiKeys = [
    'q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T',
    '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61',
    'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8',
    '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF',
    'dWbCoCb3TacCP93imNEcPxcL'
  ];
  const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

  // Create temporary file paths for input and output images
  const localFilePath = `./src/remobg-${uuidv4()}`;
  const outputFilePath = `./src/hremo-${uuidv4()}.png`;
  // Download the quoted image
  const media = await m.quoted.download();

  fs.writeFileSync(localFilePath, media);
  m.reply('Processing...');

  // Remove the background using the remove.bg API
  removeBackgroundFromImageFile({
    path: localFilePath,
    apiKey,
    size: 'regular',
    type: 'auto',
    scale: '100%',
    outputFile: outputFilePath
  }).then(async () => {
    await gss.sendMessage(
      m.from,
      {
        image: fs.readFileSync(outputFilePath),
        caption: `> Hey ${m.pushName}, your picture background has been removed successfully.`
      },
      { quoted: m }
    );
    // Clean up temporary files
    fs.unlinkSync(localFilePath);
    fs.unlinkSync(outputFilePath);
  }).catch(error => {
    console.error('Error processing image:', error);
    m.reply('There was an error processing the image.');
    fs.unlinkSync(localFilePath);
  });
};

export default tourl;