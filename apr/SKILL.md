---
name: saint-laurent-design
description: Use this skill to generate well-branded interfaces and assets for Saint Laurent — a Montreal-style deli in Leduc, Alberta — either for production or throwaway prototypes, mocks, social posts, menus, or slides. Contains essential design guidelines, colors, type, fonts, official logos, editorial photography, and a UI kit.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, social posts, menus, etc), copy assets out of `assets/` and `fonts/` and create static HTML files for the user to view. Always pair new work with `colors_and_type.css` — it has the whole token set for both primitives (forest, cream, red, Québec blue) and semantic roles.

If working on production code, you can copy assets and read the rules here to become an expert designing with this brand.

## Things to remember when designing for Saint Laurent
- **Voice.** Swaggy, unapologetic, bilingual. Québec slang (`câlisse`, `osti`, `tabarnak`, `l'gros`) is a feature — never sanitize it. No emoji.
- **Type.** Bebas Neue (display, ALL CAPS) + IBM Plex Mono Bold (body/eyebrow) + Courier Prime (menu descriptions) + Architects Daughter (red scribble, rotated −5°).
- **Color.** Forest green is hero. Cream is canvas. Red is appetite. Québec blue is for menu text only. Never pure black on cream.
- **Devices.** The 45°-tilted fleur-de-lys logomark is the single most important mark. The forest/cream checker band is the signature trim.
- **No icon system.** If you need a pictogram, prefer the fleur, unicode (`✦`, `•`), or big Bebas text ("SCROLL ↓"). Lucide is a last-resort substitution — flag it.
- **Photography** is either (a) church-style black-and-white heritage OR (b) vibrant color editorial of humans interacting with food. Never beige minimalism, never stock.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some focused questions (surface? audience? tone — civic or punchy?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Files
- `README.md` — full brand context, voice, visuals, iconography
- `colors_and_type.css` — all CSS variables; import in every new surface
- `assets/` — logos (primary / horizontal / logomark / pattern / avatar social, all with inverse variants), pattern-fleur.svg, editorial photography, sample IG posts
- `fonts/` — Bebas Neue + IBM Plex Mono .ttf files (self-hosted)
- `preview/` — design-system preview cards (colors, type, components)
- `ui_kits/website/` — Full marketing site recreation in React/Babel JSX
