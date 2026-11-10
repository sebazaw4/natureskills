import { readFileSync, writeFileSync } from "node:fs";
import { swatchRects } from "../nature-colors/scripts/preview.mjs";

const catalog = JSON.parse(readFileSync(
  new URL("../nature-colors/references/palettes.json", import.meta.url), "utf8",
));
const concepts = readFileSync(new URL("../nature-colors/references/color-studies.txt", import.meta.url), "utf8")
  .trim().split(/\r?\n/).map(line => {
    const [section, name, hex, style] = line.split("|");
    return { section, name, style, colors: hex.split(" ").map(color => `#${color}`) };
  });

const styles = new Map([
  ["professional", "Professional"],
  ["brave", "Brave"],
  ["crazy", "Crazy"],
]);
const byStyle = process.argv.includes("--styles");
const groups = byStyle ? new Map([...styles.values()].map(label => [label, []])) : new Map();
const names = new Set();
const view = byStyle ? {
  title: "Palettes by style",
  caption: "Professional is restrained, Brave adds a focal color, and Crazy brings three expressive hues together.",
  output: "style-board.svg",
} : process.argv.includes("--flowers") ? {
  subject: "flower",
  title: "Flower palette board",
  caption: "Color palettes inspired by petals, throats, stamens and foliage. Pending review.",
  output: "flower-board.svg",
} : process.argv.includes("--animals") ? {
  subject: "animal",
  title: "Animal palette board",
  caption: "Color palettes inspired by natural coats, plumage, scales and markings. Pending review.",
  output: "animal-board.svg",
} : {
  title: "Palette board",
  caption: "The opening sections draw from reference images. The final food sections show color studies.",
  output: "produce-board.svg",
};
for (const palette of [...catalog, ...concepts]) {
  if (view.subject && palette.subject !== view.subject) continue;
  const name = palette.name.toLowerCase();
  if (names.has(name)) throw new Error(`Duplicate palette: ${palette.name}`);
  names.add(name);
  if (!styles.has(palette.style)) throw new Error(`Invalid style for ${palette.name}`);
  const section = byStyle ? styles.get(palette.style) : palette.section ?? "Food palettes sampled from photos";
  if (!groups.has(section)) groups.set(section, []);
  groups.get(section).push(palette);
}

const escapeText = text => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const columns = 6;
const width = 1152;
const content = [];
let y = 135;
let number = 0;
for (const [section, palettes] of groups) {
  content.push(`<text x="24" y="${y}" class="section">${escapeText(section)} · ${palettes.length}</text>`);
  y += 18;
  for (const [index, palette] of palettes.entries()) {
    const x = 24 + (index % columns) * 186;
    const top = y + Math.floor(index / columns) * 188;
    const label = `${++number}. ${palette.name}`;
    content.push(`<g transform="translate(${x} ${top})">
  <title>${escapeText(label)} · ${palette.colors.join(" / ")}</title>
  <g transform="scale(1.36)">${swatchRects(palette.colors)}</g>
  <text y="155" class="name">${escapeText(label)}</text>
  <text y="173" class="hex">${palette.colors.join(" · ")}</text>
</g>`);
  }
  y += Math.ceil(palettes.length / columns) * 188 + 32;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${y}" viewBox="0 0 ${width} ${y}">
<title>NatureColors · ${view.title}</title>
<desc>${number} square palettes with three colors each in 60/30/10 proportions.</desc>
<style>
  text { fill: #28261F; font-family: system-ui, sans-serif; }
  .section { font-size: 18px; font-weight: 700; }
  .name { font-size: 12px; font-weight: 700; }
  .hex { font-family: monospace; font-size: 10px; }
</style>
<rect width="${width}" height="${y}" fill="#FAF7F1"/>
<text x="24" y="46" font-size="32" font-weight="700">NatureColors · ${view.title}</text>
<text x="24" y="73" font-size="14">${number} palettes · HEX order 60% / 30% / 10%</text>
<text x="24" y="96" font-size="13">${view.caption}</text>
${content.join("\n")}
</svg>
`;

writeFileSync(new URL(`../examples/${view.output}`, import.meta.url), svg);
