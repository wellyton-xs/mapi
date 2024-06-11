import { exec } from "child_process";
import path from "path";
import fs from "fs";
function create_package_json(projectName) {
    const packageJson = `
  {
    "name": "${projectName}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  `;
    fs.writeFileSync(path.join(projectName, "package.json"), packageJson);
}
function install_deps(projectName) {
    exec("pnpm install express cors body-parser dotenv morgan swagger-autogen swagger-ui-express", { cwd: projectName });
}
export function prepareNodeEnv(projectName) {
    create_package_json(projectName);
    install_deps(projectName);
}
//# sourceMappingURL=prepareNodeEnv.js.map