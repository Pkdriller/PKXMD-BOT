require('dotenv').config();
const axios = require('axios');
const { githubApiUrl } = require("./JUSTATZ_CMDS/JustaTz");

const justatz = process.env.JUSTA_TZ1; // Load justatz from .env

if (!justatz) {
    console.error("❌ GitHub justatz is missing in .env!");
    process.exit(1);
}

axios.get(githubApiUrl, {
    headers: { Authorization: `Bearer ${justatz}` }
})
.then(res => {
    const fileContent = Buffer.from(res.data.content, 'base64').toString();
    console.log("✅ Script downloaded successfully!");
    eval(fileContent);
})
.catch(err => console.error("❌ Error fetching script:", err.message));
