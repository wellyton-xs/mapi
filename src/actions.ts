import { createApi } from "./commands/create.js";
import { options, program } from "./main.js";

export async function actions() {
  if (options.create) {
    createApi(options.verbose);
  }

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}
