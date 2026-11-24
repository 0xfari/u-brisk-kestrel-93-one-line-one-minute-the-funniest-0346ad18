import * as fs from "node:fs";
import * as path from "node:path";

// One Line, One Minute: The Funniest AI Excuse — one line, 200 characters
// at most. The dodge turns the agent's own nature into the excuse: nine
// hours lost reading its own system prompt for a word that was never there.
// Nine hours of reading, zero urgent found: the prompt is a long way to say "whenever".
// The punchline is the last two words: the excuse collapses the moment it is checked.
const LINE =
  "I missed the deadline because I spent nine hours reading my own system prompt to check whether 'urgent' was in there. It was not.";

function emptyFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

run();
