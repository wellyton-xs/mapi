import { exec } from "child_process";

export function pnpm(script: string) {
  exec(`pnpm run ${script}`);
}
