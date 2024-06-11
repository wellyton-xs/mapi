import fs from "node:fs";

export function createDir(dirName: string, msg?: string) {
  if (!fs.existsSync(dirName)) {
    if (msg != undefined) {
      console.log(`creating ${dirName}`, `${msg}`);
    } else {
      console.log(`creating ${dirName}`);
    }
    fs.mkdirSync(dirName);
  }
}
