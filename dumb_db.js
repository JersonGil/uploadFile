const fs = require("fs");
const spawn = require("child_process").spawn;
const dir = "dumps/";

const dumb = function () {
  const dumpFileName = `${Math.round(Date.now() / 1000)}.dump.sql`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const writeStream = fs.createWriteStream(`${dir}${dumpFileName}`);

  const dump = spawn("mysqldump", [
    "-u",
    "root",
    "-pTest@1234",
    "loteria",
    "users",
    "roles",
  ]);

  dump.stdout
    .pipe(writeStream)
    .on("finish", function () {
      console.log("Completed");
    })
    .on("error", function (err) {
      console.log(err);
    });

  return dumpFileName;
};

module.exports = dumb;
