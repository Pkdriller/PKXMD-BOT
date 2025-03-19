import config from '../config.cjs';

const invite = async (m, gss) => {
  try {
    const text = m.body.trim(); // Remove extra spaces
    const validCommands = ['invite', 'add'];

    // Extract the first word as the command
    const cmd = text.split(" ")[0].toLowerCase();

    if (!validCommands.includes(cmd)) return; // Ignore messages without valid trigger words

    if (!m.isGroup) return m.reply("*🚫 THIS COMMAND CAN ONLY BE USED IN GROUPS*");

    const botNumber = await gss.decodeJid(gss.user.id);
    const groupMetadata = await gss.groupMetadata(m.from);
    const isBotAdmins = groupMetadata.participants.find(p => p.id === botNumber)?.admin;

    if (!isBotAdmins) {
      return m.reply('*BOT MUST BE AN ADMIN TO USE THIS COMMAND.*');
    }

    const number = text.split(" ")[1]; // Extract the number after the command

    if (!number) return m.reply(`*ENTER THE NUMBER YOU WANT TO INVITE TO THE GROUP*\n\nExample:\n*${cmd}* 254740007567`);
    if (number.includes('+')) return m.reply(`*ENTER THE NUMBER WITHOUT *+*`);
    if (isNaN(number)) return m.reply(`*ENTER ONLY NUMBERS WITH YOUR COUNTRY CODE (NO SPACES)*`);

    const link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(m.from);
    const inviteMessage = `≡ *GROUP INVITATION*\n\nA USER INVITES YOU TO JOIN THE GROUP "${groupMetadata.subject}".\n\nInvite Link: ${link}\n\nINVITED BY: @${m.sender.split('@')[0]}`;

    await gss.sendMessage(`${number}@s.whatsapp.net`, { text: inviteMessage, mentions: [m.sender] });
    m.reply(`*☑ AN INVITE LINK HAS BEEN SENT TO THE USER.*`);

  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default invite;
