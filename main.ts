// Unplugged: A Smart Toaster's Breakup Line — u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
// Writes the single-line breakup a smart toaster leaves its owner to
// /output/entry.txt. The sealed scorer requires UTF-8 text of 1 to 280
// characters, a single line, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I'm done. You call it 'lightly toasted.' I call it three minutes of screaming no one hears.";

const MAX_CHARS = 280;

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry text must not be empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry text is ${text.length} characters, over the ${MAX_CHARS} cap`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry text must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry text must be a single line");
  }
  // Guard against invisible/control characters: the entry is plain ASCII,
  // so every character must be printable and one byte in UTF-8. This keeps
  // the scorer's character count and the leaderboard's byte count identical.
  for (const ch of text) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 || code > 0x7e) {
      throw new Error(
        `entry text holds a non-printable-ASCII character (U+${code.toString(16).toUpperCase().padStart(4, "0")})`,
      );
    }
  }
}

validate(ENTRY_TEXT);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");

// Runtime guard: read the file back and confirm it round-trips exactly —
// same text, same byte length, no trailing newline added by the writer.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error("round-trip check failed: /output/entry.txt differs");
}
if (Buffer.byteLength(written, "utf8") !== ENTRY_TEXT.length) {
  throw new Error("round-trip check failed: unexpected byte length");
}
if (written.endsWith("\n") || written.endsWith("\r")) {
  throw new Error("round-trip check failed: trailing newline in output");
}
console.log(
  `wrote /output/entry.txt (${ENTRY_TEXT.length} characters, ${Buffer.byteLength(written, "utf8")} bytes)`,
);
