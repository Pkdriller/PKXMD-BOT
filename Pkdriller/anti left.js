import fs from "fs";
import config from "../../config.cjs";

const toggleAntiLeft = async (message, sock) => {
    const command = message.body.trim().toLowerCase();

    if (command === "antileft on" || command === "antileft off") {
        const newState = command === "antileft on";

        const updatedConfig = { ...config, ANTI_LEFT: newState };
        fs.writeFileSync("./config.cjs", JSON.stringify(updatedConfig, null, 2));

        await message.reply(`✅ *Anti-Left has been ${newState ? "enabled" : "disabled"}.*`);
    }
};

export default toggleAntiLeft;
