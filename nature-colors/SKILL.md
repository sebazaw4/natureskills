---
name: nature-colors
description: Offer Professional, Brave, and Crazy nature-derived palettes in 60/30/10 proportions for a website, app, brand, post, graphic, or video. Use for /nature-colors or when asked to pick project colors, such as "dobierz kolory".
---

# NatureColors

Read [the palette catalog](references/palettes.json). Each palette has a `style` field. Prefer an approved match in each requested style. If a style has no suitable approved match, use a pending palette and label it as a draft.

For an explicit request to browse or use early color studies, also read [the concept catalog](references/color-studies.txt). Each row contains a category, an English name, three HEX colors in 60/30/10 order, and a style, separated by pipes. Label these selections as color studies awaiting photo review.

## Offer three styles

- In the first reply to a new palette request, show exactly three different palettes in this order, one per style:
  1. **Professional** (`professional`). A restrained composition. Use neutrals or subdued tones for the large areas and keep any clear color accent controlled.
  2. **Brave** (`brave`). Two quieter colors support one expressive focal color. The focal color can stand out through saturation, hue, or lightness. White, pale blue, and vivid violet are one example.
  3. **Crazy** (`crazy`). Three expressive hues create a surprising combination, such as orange, green, and yellow. Each color contributes to the contrast, even at 10%.
- Invite the user to choose one, two, or all three, or to ask for alternatives in any of the three styles. A selection carries those palettes forward. An alternatives request returns one new palette per requested style, without repeating palettes already offered. If the user asks for alternatives without naming a style, offer a new set of three. If a style runs out of suitable unused palettes, say so and ask which constraint can be relaxed.
- Honor explicit constraints first, including an existing brand color, light or dark surfaces, and a named source of inspiration. Then match the intended mood and medium using the catalog tags and the actual HEX values. Check that the swatches express the style in context. If the brief makes a style hard to satisfy, label the closest choice as an approximation.
- Keep the catalog order by default. The three positions are dominant (60%), supporting (30%), and accent (10%). Swap roles when a different order serves the project better and briefly state why.
- If no catalog palette in a style meets a hard constraint, use the closest palette in that style and label it as adapted if you adjust a color. Change only what the brief requires, such as using the exact brand color or shifting a shade for readability. Keep the source entry intact and keep the first reply to three options.

## Present or apply

For each offered palette, show its style, English palette name, three copyable HEX codes in role order, and a small square preview. Keep source records out of the response. Use [the preview script](scripts/preview.mjs) with Node.js, passing the colors in the order shown:

```sh
node scripts/preview.mjs ./palette.svg "#C49EAA" "#AAAD43" "#CEA378"
```

Run the script via its path in this skill folder. Save the SVG in a writable output directory and embed or link it using the host's supported local file format. If Node.js is unavailable, use the same geometry in an SVG: fill the left 60% of the square with the dominant color, then split the right 40% into a top area 75% of the square's height and a bottom area 25% of its height.

Show the three options before applying a new palette. Once the user has selected a palette and requested application, map the roles to the project and check readability of actual foreground and background pairs. If the user selects multiple palettes for one project, treat them as separate variants. Use the proportions as a visual guide. Preserve an existing approved palette unless the user requests a color change.
