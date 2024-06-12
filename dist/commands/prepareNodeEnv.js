import * as template from "./templateFiles.js";
import { install_deps } from "./installDeps.js";
export function prepare_node_env(projectName, verbose) {
    template.create_package_json(projectName);
    template.create_index_file(projectName);
    install_deps(projectName, verbose);
}
