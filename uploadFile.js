//function to upload file
async function uploadFile(filepath, filename, admin) {
  //get your bucket
  const bucket = admin.storage().bucket();

  await bucket.upload(filepath, {
    gzip: true,
    destination: filename,
    validation: "crc32c",
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  });

  console.log(`${filename} uploaded to bucket.`);
}

module.exports = uploadFile;
