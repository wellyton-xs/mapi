import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import * as template from "./templates.js";

function write_file(projectName: string, fileName: string, content: string) {
  fs.writeFileSync(path.join(projectName, fileName), content);
}

export function create_package_json(
  projectName: string,
  programmingLanguage: string,
) {
  const package_json = template.package_json(projectName, programmingLanguage);

  write_file(projectName, "package.json", package_json);
}

export function create_index_file(
  projectName: string,
  programmingLanguage: string,
) {
  if (programmingLanguage == "typescript") {
    write_file(
      `${projectName}/src`,
      `index.ts`,
      template.typescript_index_file,
    );
  } else {
    write_file(
      `${projectName}/src`,
      `index.js`,
      template.javascript_index_file,
    );
  }
}

export function create_prettier_file(projectName: string) {
  write_file(`${projectName}`, ".prettierrc", template.prettierrc);
}

export function create_typescript_file(projectName: string) {
  write_file(`${projectName}`, "tsconfig.json", template.tsconfig);
}
