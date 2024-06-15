import { prepare_directories } from "./prepareDirectories.js";
import { prepare_node_env } from "./prepareNodeEnv.js";
import { questions } from "./questions.js";

export async function createApi(verbose?: boolean) {
  try {
    const choices = await questions();
    let projectName = choices.projectName;
    let packageManager = choices.packageManager;
    let programmingLanguage = choices.programmingLanguage;
    prepare_directories(projectName);
    prepare_node_env(projectName, programmingLanguage, packageManager, verbose);
  } catch (error) {
    console.error("unexpected error:", error);
  }
}
