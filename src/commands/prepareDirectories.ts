import { createDir } from "./createDir.js";

export function prepareDirectories(name: string) {
  createDir(name);
  createDir(name + "/src");
  createDir(name + "/config", "experimental");
  createDir(name + "/docs");
}
