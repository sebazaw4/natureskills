---
name: nature-colors
description: Choose or apply a nature-derived three-color palette for a website, app, brand, post, graphic, or video. Use for /nature-colors or when asked to pick project colors, such as "dobierz kolory".
---

# NatureColors

Read [the palette catalog](references/palettes.json). Prefer approved palettes. In the public preview, when no approved palettes are available, choose one pending palette and label it as a draft.

For an explicit request to browse or use early color studies, also read [the concept catalog](references/color-studies.txt). Its rows contain a category, an English name, and three HEX colors in 60/30/10 order. Label these selections as color studies awaiting photo review.

## Choose

- Pick one palette. Honor explicit constraints first, including an existing brand color, light or dark surfaces, and a named source of inspiration. Then match the intended mood and medium using the catalog tags and the actual HEX values.
- Keep the catalog order by default. The three positions are dominant (60%), supporting (30%), and accent (10%). Swap roles when a different order serves the project better and briefly state why.
- When a hard constraint cannot be met, show the closest catalog palette and at most one clearly labeled adapted variant. Change only what the brief requires, such as replacing a swatch with the exact brand color or shifting a shade for readability. Use the same approach for a concrete contrast issue. Keep the source entry intact.

## Present or apply

Show the English palette name, three copyable HEX codes in role order, and a small square preview. Keep source records out of the response. Use [the preview script](scripts/preview.mjs) with Node.js, passing the colors in the order shown:

```sh
node scripts/preview.mjs ./palette.svg "#C49EAA" "#AAAD43" "#CEA378"
```

Run the script via its path in this skill folder. Save the SVG in a writable output directory and embed or link it using the host's supported local file format. If Node.js is unavailable, use the same geometry in an SVG: fill the left 60% of the square with the dominant color, then split the right 40% into a top area 75% of the square's height and a bottom area 25% of its height.

For a selection request, return the preview and codes. When the user also asks to apply the palette, map the roles to the project and check readability of actual foreground and background pairs. Use the proportions as a visual guide. For edits to existing work, preserve its approved palette unless the user requests a color change.
