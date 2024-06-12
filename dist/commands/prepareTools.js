import * as template from "./templateFiles.js";
import * as runner from "./runner.js";
export function prepare_tools(projectName) {
    template.create_prettier_file(projectName);
    runner.pnpm("write");
}
