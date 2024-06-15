import inquirer from "inquirer";
type Answer = {
  projectName: string;
  packageManager: string;
  programmingLanguage: string;
};
export async function questions() {
  const answer: Answer = await inquirer.prompt([
    {
      name: "projectName",
      default: "my-api",
      message: "what's your project name?",
    },
    {
      name: "packageManager",
      type: "list",
      default: "pnpm",
      message: "which package manager are you using?",
      choices: ["pnpm", "npm", "yarn"],
    },
    {
      name: "programmingLanguage",
      default: "typescript",
      type: "list",
      message: "What programming language do you want to use?",
      choices: ["typescript", "javascript"],
    },
  ]);

  return answer;
}
