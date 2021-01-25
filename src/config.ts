import { resolve } from "path";
import { readdirSync, existsSync } from "fs";

// Source Directory
const svgsDir = resolve(__dirname, "svg");
if (!existsSync(svgsDir)) {
  console.log("Source .svg files not found");
}

const staticCursorsDir = resolve(svgsDir, "static");
const animatedCursorsDir = resolve(svgsDir, "animated");

// Out Directory
const bitmapsDir = resolve(__dirname, "../", "bitmaps");

//  Cursors
const staticCursors = readdirSync(staticCursorsDir).map((f) =>
  resolve(staticCursorsDir, f)
);
const animatedCursors = readdirSync(animatedCursorsDir).map((f) =>
  resolve(animatedCursorsDir, f)
);

export { staticCursors, animatedCursors, bitmapsDir };
