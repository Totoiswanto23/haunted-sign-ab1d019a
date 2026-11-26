// Funniest Sign on a Haunted Server Room Door
// Writes one funny sign line (<=120 chars) to /output/entry.txt.
// The sign: a ghost with root access in Rack 4 — IT life meets the
// supernatural, short and punchy like a real printed door sign.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The ghost in Rack 4 has root access. Knock twice, say please, and never unplug it.";

// Guard: the gate requires 1-120 chars, single line, not whitespace-only.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-120`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
