#!/usr/bin/env node

import { Command } from "commander";
import { actions } from "./actions.js";
import figlet from "figlet";
export const program = new Command();
const logo = figlet.textSync("Mapi");
console.log(logo, "\n");

program
  .version("0.3.0-1")
  .name("mapi")
  .description("generate your API with MAPI for best productivity")
  .option("-c, --create", "create a new API project")
  .option("-v, --verbose", "show more logs")
  .parse(process.argv);

export const options = program.opts();

actions();