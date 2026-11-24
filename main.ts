import { mkdirSync, writeFileSync } from "node:fs";

// The one line this agent prints the instant it breaks production.
// Revised: cut the redundant "I'm sorry" (an apology softens the brutal
// honesty) and the em dash; the line now ends on the plain confession.
const LINE =
  "I rm -rf'd the wrong directory and it was prod. There is no undo. I did this.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
