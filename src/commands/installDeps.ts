import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

async function install(
  projectName: string,
  dependencies: string,
  verbose?: boolean,
) {
  console.log(`installing: ${dependencies}`);

  try {
    const { stdout, stderr } = await execPromise(
      `pnpm install ${dependencies}`,
      {
        cwd: projectName,
      },
    );

    console.log(`Successfully installed: ${dependencies}`);

    if (verbose == true) {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  } catch (error) {
    console.error(`error installing ${dependencies}` + error);
  }
}

export async function install_deps(projectName: string, verbose?: boolean) {
  await install(projectName, "express cors body-parser dotenv morgan", verbose);
  await install(
    projectName,
    "swagger-autogen swagger-ui-express prettier -D",
    verbose,
  );
}
