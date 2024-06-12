import { exec } from "child_process";
export function pnpm(script) {
    exec(`pnpm run ${script}`);
}
