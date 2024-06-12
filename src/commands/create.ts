import { prepare_directories } from "./prepareDirectories.js";
import { prepare_node_env } from "./prepareNodeEnv.js";
import { prepare_tools } from "./prepareTools.js";

export async function createApi(projectName: string, verbose?: boolean) {
  try {
    prepare_directories(projectName);
    prepare_node_env(projectName, verbose);
    prepare_tools(projectName);
  } catch (error) {
    console.error("unexpected error:", error);
  }
}
