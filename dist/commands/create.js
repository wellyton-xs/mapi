var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { prepareDirectories } from "./prepareDirectories.js";
import { prepareNodeEnv } from "./prepareNodeEnv.js";
export function createApi(projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            prepareDirectories(projectName);
            prepareNodeEnv(projectName);
        }
        catch (error) {
            console.error("unexpected error:", error);
        }
    });
}
//# sourceMappingURL=create.js.map