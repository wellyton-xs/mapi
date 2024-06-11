#!/usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import { actions } from "./actions.js";
export const program = new Command();

console.log(figlet.textSync("Mapi"), "\n");

program
  .version("0.1.1")
  .description("generate your API with MAPI for best productivity")
  .option("-c, --create [project_name]", "create a new API project")
  .parse(process.argv);

export const options = program.opts();

console.log();

actions();
