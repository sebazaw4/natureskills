# NatureColors

**Three colors from nature. One palette for your project.**

NatureColors is an AI skill for picking three colors for a website, brand, post, graphic, or video. Describe what you're making and how it should feel. The skill picks one palette from a catalog inspired by nature photography and observation imagery.

### Red Onion

![Red Onion palette with a dominant color on the left, a supporting color at the top right, and an accent at the bottom right](examples/red-onion.svg)

60% `#F7D6C1` · 30% `#BE8985` · 10% `#6D3438`

*If nature says it goes, it goes.*

## Try it

Copy the [`nature-colors`](nature-colors) folder into your AI client's skills directory. In a Codex repository, that can be `.agents/skills/nature-colors`. Use `/nature-colors` in clients that expose skills as slash commands or choose `$nature-colors` in Codex. You can also ask in your own words.

> Pick colors for a calm ceramics studio website with a light background.

You get one English palette name, three copyable HEX codes, and a small square that shows how the colors share space. The dominant color takes up 60%, the supporting color 30%, and the accent 10%. Ask the skill to apply the palette if you want it to update your project too.

## Catalog status

This public preview includes **414 palettes**. The [palette board](examples/produce-board.svg) brings together flowers, animals, food, rocks, minerals, gemstones, and the Solar System. Open the [flower board](examples/flower-board.svg) or the [animal board](examples/animal-board.svg) to browse one collection.

The [catalog](nature-colors/references/palettes.json) contains 319 image-based palettes awaiting approval. Each entry records an English name, three colors in role order, and its review status. Ask for early color studies to explore the [95 additional food palettes](nature-colors/references/color-studies.txt). The stable release is planned for 200 approved palettes.
