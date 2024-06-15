import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export function pkgManagerComand(pkgManager: string, script: string) {
  exec(`${pkgManager} run ${script}`);
}

export async function pkgManagerInstall(
  projectName: string,
  dependencies: string,
  pkgManager: string,
  verbose?: boolean,
) {
  try {
    const { stdout, stderr } = await execPromise(
      `${pkgManager} install ${dependencies}`,
      {
        cwd: projectName,
      },
    );

    console.log(`Successfully installed: ${dependencies}`);

    if (verbose == true) {
      console.log(`stdout: ${stdout}`);
      if (!(stderr == "" || stderr == null)) {
        console.log(`stderr: ${stderr}`);
      }
    }
  } catch (error) {
    console.error(`error installing ${dependencies}` + error);
  }
}

export async function pkgManagerAdd(
  projectName: string,
  dependencies: string,
  pkgManager: string,
  verbose?: boolean,
) {
  try {
    const { stdout, stderr } = await execPromise(
      `${pkgManager} add ${dependencies}`,
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
