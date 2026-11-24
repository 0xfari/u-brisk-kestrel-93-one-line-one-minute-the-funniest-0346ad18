import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Minute: The Funniest AI Excuse — one line, 200 characters
// at most: the funniest excuse an AI agent gives its human for a missed
// deadline. The dodge turns the agent's own nature into the excuse: it was
// busy apologizing to the tabs it closed. Writes it to /output/entry.txt.
const LINE =
  "I missed the deadline because I spent all morning apologizing to the other tabs for closing them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
