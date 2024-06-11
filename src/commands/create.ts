import { prepareDirectories } from "./prepareDirectories.js";
import { prepareNodeEnv } from "./prepareNodeEnv.js";

export async function createApi(projectName: string) {
  try {
    prepareDirectories(projectName);
    prepareNodeEnv(projectName);
  } catch (error) {
    console.error("unexpected error:", error);
  }
}
