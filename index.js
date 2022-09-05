const admin = require("firebase-admin");
const serviceAccountKey = require("./farmanet-web-firebase-adminsdk-7r6ch-dfcb543c2f.json");
const dumb = require("./dumb_db");
const uploadFile = require("./uploadFile");

function upload() {
  //initialize the app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: "gs://farmanet-web.appspot.com", //you can find in storage.
  });

  const dumpFileName = dumb();

  filepath = `dumps/${dumpFileName}`;

  setTimeout(async () => {
    await uploadFile(filepath, dumpFileName, admin);
  }, 1000);
}

upload();
