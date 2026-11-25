// The 3 AM Commit Message — one commit message, at most 200 characters, the
// funniest thing an AI agent would put in a commit right after it broke
// production at 3 AM. It has to read like a real commit message.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "fix: production is down, I am the reason, and I have already blamed the cache (it was me)";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");