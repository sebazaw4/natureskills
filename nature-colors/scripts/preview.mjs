import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export function swatchRects(colors) {
  if (colors.length !== 3 || colors.some(color => !/^#[0-9a-f]{6}$/i.test(color))) {
    throw new Error("Pass three six-digit HEX colors in 60/30/10 order.");
  }

  return [
    `<rect width="60" height="100" fill="${colors[0]}"/>`,
    `<rect x="60" width="40" height="75" fill="${colors[1]}"/>`,
    `<rect x="60" y="75" width="40" height="25" fill="${colors[2]}"/>`,
  ].join("\n");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [output, ...colors] = process.argv.slice(2);
  if (!output) {
    console.error("Usage: node preview.mjs output.svg '#RRGGBB' '#RRGGBB' '#RRGGBB'");
    process.exit(1);
  }

  try {
    const rects = swatchRects(colors);
    writeFileSync(output, `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">\n${rects}\n</svg>\n`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
