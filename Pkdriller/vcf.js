import fs from "fs";
import path from "path";
import config from "../config.cjs";

const vcfCompiler = async (m, gss) => {
  try {
    const cmd = m.body.toLowerCase().trim();
    if (!["vcf"].includes(cmd)) return;

    if (!m.isGroup) {
      return m.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS!*\n\n*Regards, Bruce Bera.*");
    }

    m.reply("*⏳ Cloud Ai is compiling your contacts, please wait...*");

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;

    if (!participants.length) {
      return m.reply("*⚠️ No contacts found in this group.*\n\n*Regards, Bruce Bera.*");
    }

    let vcfContent = `BEGIN:VCARD\nVERSION:3.0\nFN:WhatsApp Group Contacts\nEND:VCARD\n`;
    
    participants.forEach((member) => {
      const number = member.id.split("@")[0];
      const name = member.notify || member.pushname || `Unknown ${number}`;
      
      vcfContent += `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:+${number}
END:VCARD`;
    });

    const vcfPath = path.join("/tmp", `GroupContacts-${m.from}.vcf`);
    fs.writeFileSync(vcfPath, vcfContent, "utf8");

    await gss.sendMessage(m.from, { document: { url: vcfPath }, mimetype: "text/x-vcard", fileName: "WhatsApp_Group_Contacts.vcf" });

    m.reply("*✅ Contact list compiled successfully! Download and import it into your phone or Gmail.*\n\n*Regards, Bruce Bera.*");
  } catch (error) {
    console.error("Error in VCF Compilation:", error);
    m.reply("*⚠️ An error occurred while compiling contacts.*\n\n*Regards, Bruce Bera.*");
  }
};

export default vcfCompiler;
