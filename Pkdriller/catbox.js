const fileType = require('file-type');
const FormData = require('form-data');
const fetch = require('node-fetch');
const MAX_FILE_SIZE_MB = 200; // Maximum file size

async function uploadMedia(buffer) {
  try {
    const { ext } = await fileType.fromBuffer(buffer);  
    const bodyForm = new FormData();
    bodyForm.append("fileToUpload", buffer, "file." + ext);
    bodyForm.append("reqtype", "fileupload");

    const res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: bodyForm,
    });

    if (!res.ok) {
      throw new Error(`Upload failed with status ${res.status}: ${res.statusText}`);
    }

    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Error during media upload:", error);
    throw new Error('Failed to upload media');
  }
}

async function handleMediaUpload(quoted, Cypher, mime) {
  // Ensure quoted message exists and is valid
  if (!quoted || !mime) {
    throw new Error('No valid media to upload!');
  }

  try {
    // Download the media using the library's download method
    const media = await Cypher.downloadAndSaveMediaMessage(quoted);

    // Read the media file into a buffer
    const fs = require('fs');
    const buffer = fs.readFileSync(media);

    // Check the file size
    const fileSizeMB = buffer.length / (1024 * 1024);
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      fs.unlinkSync(media); // Clean up the temp file
      return `File size exceeds the limit of ${MAX_FILE_SIZE_MB}MB.`;
    }

    // Upload the media
    const mediaUrl = await uploadMedia(buffer);

    // Clean up the temp file
    fs.unlinkSync(media);

    return mediaUrl;
  } catch (error) {
    console.error('Error handling media upload:', error);
    throw new Error('Failed to handle media upload');
  }
}

module.exports = {
  uploadMedia,
  handleMediaUpload,
};