import { exec } from "child_process";
import path from "path";
import fs from "fs";

function create_package_json(projectName: string) {
  const packageJson = `
  {
    "name": "${projectName}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "dev": "node src/index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  `;
  fs.writeFileSync(path.join(projectName, "package.json"), packageJson);
}

function install_deps(projectName: string) {
  exec(
    "pnpm install express cors body-parser dotenv morgan swagger-autogen swagger-ui-express",
    { cwd: projectName }
  );
}

export function prepareNodeEnv(projectName: string) {
  create_package_json(projectName);
  install_deps(projectName);
}
