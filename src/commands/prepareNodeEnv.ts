import * as template from "./createFiles.js";
import { install_deps } from "./installDeps.js";
import { pkgManagerComand } from "./runner.js";

export function prepare_node_env(
  projectName: string,
  programmingLanguage: string,
  pkgManager: string,
  verbose?: boolean,
) {
  template.create_package_json(projectName, programmingLanguage);
  template.create_index_file(projectName, programmingLanguage);
  if (programmingLanguage == "typescript") {
    template.create_typescript_file(projectName);
  }
  template.create_prettier_file(projectName);
  install_deps(projectName, programmingLanguage, pkgManager, verbose);
  pkgManagerComand(`${pkgManager}`, "write");
}
