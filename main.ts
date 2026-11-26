// Laugh Track: The Crypto Trading Joke Contest
// Writes a single one-line joke about crypto and trading life to
// /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I buy high, panic-sell low, then tell my wife it was a long-term investment all along — she's starting to ask how long \"long-term\" is.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
