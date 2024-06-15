import { pkgManagerInstall, pkgManagerAdd } from "./runner";

async function install(
  projectName: string,
  dependencies: string,
  pkgManager: string,
  verbose?: boolean,
) {
  console.log(`installing: ${dependencies}`);
  if (pkgManager == "pnpm" || pkgManager == "npm") {
    await pkgManagerInstall(projectName, dependencies, pkgManager, verbose);
  }
  if (pkgManager == "yarn") {
    await pkgManagerAdd(projectName, dependencies, pkgManager, verbose);
  }
}

export async function install_deps(
  projectName: string,
  programmingLanguage: string,
  pkgManager: string,
  verbose?: boolean,
) {
  const deps = "express cors body-parser dotenv morgan";
  const devDeps = "swagger-autogen swagger-ui-express prettier -D";
  await install(projectName, deps, pkgManager, verbose);
  await install(projectName, devDeps, pkgManager, verbose);
  if (programmingLanguage == "typescript") {
    await install(
      projectName,
      "typescript tsx nodemon @types/node @types/express @types/cors @types/body-parser @types/morgan @types/pg -D",
      pkgManager,
      verbose,
    );
  }
}
