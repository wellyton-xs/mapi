var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { exec } from "child_process";
import { promisify } from "util";
const execPromise = promisify(exec);
function install(projectName, dependencies, verbose) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`installing: ${dependencies}`);
        try {
            const { stdout, stderr } = yield execPromise(`pnpm install ${dependencies}`, {
                cwd: projectName,
            });
            console.log(`Successfully installed: ${dependencies}`);
            if (verbose == true) {
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        }
        catch (error) {
            console.error(`error installing ${dependencies}` + error);
        }
    });
}
export function install_deps(projectName, verbose) {
    return __awaiter(this, void 0, void 0, function* () {
        yield install(projectName, "express cors body-parser dotenv morgan", verbose);
        yield install(projectName, "swagger-autogen swagger-ui-express prettier -D", verbose);
    });
}
