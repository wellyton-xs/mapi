import { createDir } from "./createDir.js";
export function prepareDirectories(name) {
    createDir(name);
    createDir(name + "/src");
    createDir(name + "/config", "experimental");
    createDir(name + "/docs");
}
//# sourceMappingURL=prepareDirectories.js.map