var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prepare_directories } from "./prepareDirectories.js";
import { prepare_node_env } from "./prepareNodeEnv.js";
import { prepare_tools } from "./prepareTools.js";
export function createApi(projectName, verbose) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            prepare_directories(projectName);
            prepare_node_env(projectName, verbose);
            prepare_tools(projectName);
        }
        catch (error) {
            console.error("unexpected error:", error);
        }
    });
}
