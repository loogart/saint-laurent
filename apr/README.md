# Saint Laurent — Design System

> **Montreal soul, Alberta soil.**
> A Montreal-style deli in the heart of Leduc, Alberta. Best smoked meat in Alberta. Not a question. A statement.

Saint Laurent is named after Rue Saint-Laurent, the legendary Montreal street. Founded by locals + born-and-raised Montrealers, the brand is a **Québec institution reimagined for Alberta** — a heritage deli with modern discipline. It pulls from Montréal delis, church basements, hockey arenas, casse-croûtes, 70s–80s Québec visual culture, government signage, and enamel tile walls. Nostalgic without nostalgia gimmicks.

## Products in scope

1. **Brand identity** — logos, pattern, social avatar, wordmark (files in `/assets`)
2. **Menu** (print + digital) — Bebas Neue + Courier Prime, Québec-blue ink on cream
3. **Website / coming soon page** — forest-green hero, checker trim, Oswald+Space Mono
4. **Social** — 42 Instagram posts exported, strong typographic posters
5. **Signage / sign design** — civic, institutional, billboard-bold
6. **Packaging mockups** — truck, takeout, highway sign

## Sources reviewed

- **Figma** (VFS): `/feb-17-2026/*` (brand reveal, most current), `/Menu-design/*`, `/Brand-identity-June-25-2025/*`, `/social-media-ideas/*`, `/signage-ideas/*`, `/STL-Aug-1-2026/*`, `/Final-mood-board-July-30-2025`
- **Codebase** (File System Access): `Saint Laurent/` — includes `_export/saint laurent brand assets/` (official logo set + 42 IG posts), `photos/` (church-B&W + editorial food + interior), `website/` (three website experiments: claude v1, codex v1, google stitch), `font ideas/` (Tanker, Telma, Dancing Script)
- **Uploads**: full official logo set (SVG), `pattern 1.svg`, the Brand Reveal PDF

---

## Content fundamentals — voice & copy

**Tone.** Swaggy. Unapologetic. A little profane. Bilingual (FR↔EN, often mid-sentence). Québécois slang is a feature, not a bug — `câlisse`, `osti`, `tabarnak`, `l'gros`, `pcq` (parce que) show up in copy and are never sanitized. The brand is proud, not precious.

**Casing.** Display type is **ALL CAPS** (Bebas Neue) or ALL CAPS mixed with lowercase accented characters (`MANGE çA`, `Steamé ALLDRESS`). Body copy is sentence case. Eyebrows/metadata are UPPERCASE with tracking.

**Pronouns.** "We" for the restaurant, "you" for the guest. Direct address. "We saved a seat for you." No corporate "our valued customers" energy.

**Emoji.** **No.** Not in the brand. Icons and fleur-de-lys do that job.

**Signature phrasings.**
- "Montreal soul, Alberta soil." (TLDR tagline)
- "Best Smoked Meat in Alberta. Not a question. A statement."
- "Heritage with edge. Heritedge osti."
- "Nostalgia, Recut."
- "…et le pickle." (ironic tag)
- "Juicy AF", "Mange çà", "Vive le coleslaw libre", "Saint Smoked Meat l'gros"
- "This place has been here forever even if it opened yesterday."
- Dates written FR: "18 février 2026"
- Location stamp: `18 février 2026 • MONTRÉAL ✦ LEDUC`

**Don't.** Don't apologize for being loud. Don't translate every FR phrase — the untranslated texture is the point. Don't use exclamation marks; the type does the yelling. Don't say "artisanal," "curated," "elevated," or anything a chef on Netflix would say.

---

## Visual foundations

**Palette.** Three hero colors: **forest green** `#466956` (institutional, deli-tile, church roof), **cream** `#F1EDE4` / warm `#FCF4DF` (butcher paper / enamel), **red** `#DB4F4C` / `#A54236` (appetite, casse-croûte sale tag). Accented by **Québec civic blue** `#3F5EA7` (menu body, never hero). Deep **ink** `#2F2C2A` for hairlines and dark surfaces, **char** `#1A1919` for photo backgrounds. Never use pure black on cream.

**Typography.** **Bebas Neue Bold** for all headlines and menu items — condensed, civic-signage presence. **IBM Plex Mono Bold** (with italics) for body, eyebrows, metadata — typewriter discipline, a little journalistic. **Courier Prime Bold** for menu descriptions (print feel). Occasional **hand-scribble** (Architects Daughter, rotated −5°, red) for editor's marks like "Where we landed last time."

**Scale.** Display sizes are HUGE — hero menu items 83 px, slogans 100–155 px, full-bleed posters go 300+ px. Small text never below 14 px.

**Logo.** The wordmark is a single geometric SAINT / LAURENT stack that reads as carved civic signage. The logomark is the **Saint Laurent monogram** with a tilted 45° fleur-de-lys — the single most important brand device. "Tradition tilted." Used as tile inlay, menu separator, window frosting, packaging stamp, and negative-space device.

**Backgrounds.** Three modes:
- **Cream flat** — most common (menus, web, social light)
- **Forest flat** — hero sections, signage
- **B&W "church" photography** — used multiply-blended over cream for texture
- **Full-bleed editorial food photography** — saturated, warm, top-down, with natural shadow
- Repeat fleur-de-lys patterns exist (`pattern 1.svg`) but used sparingly as accent

**Corners.** Cards are **24 px / 32 px** rounded (deli-paper feel). Menu blocks and signage are **square** or 4 px. Never fully rounded except dots and the checker band seams.

**Borders.** 2–8 px solid hairlines only. Strong red 8px outlines frame the print menu page. Web hairlines are `rgba(47,44,42,0.18)`. No 1px grey "safe" borders.

**Shadows.** Offset, warm, sometimes aggressive: `5px 14px 14px rgba(0,0,0,0.4)` on product shots (the "deli" shadow). Soft ambient shadows for cards: `0 8px 24px rgba(47,44,42,0.14)`.

**Checker band.** Green/cream checker is the brand's signature trim — used as tile edge, billboard divider, menu underline. 16 px tall, 8 tiles per row typically.

**Animation.** Mostly static — this is **print-first branding**. When motion exists, it's: slow fade-in on hero text, type sliding up from below (Bebas Neue hit), image reveals, rotation of the fleur-de-lys device. No bounces. No springy easing. Easing = `cubic-bezier(0.22, 1, 0.36, 1)` (standard deceleration).

**Hover.** Darken by ~8% or shift to solid red fill (inverse). On images, subtle `scale(1.02)` + slight brightness drop. On outline buttons, fill cream.

**Press.** Shrink `scale(0.98)` + hard shadow offset (`2px 4px 6px rgba(0,0,0,0.35)`).

**Transparency & blur.** Rare. Sticky nav = cream at 88% + `backdrop-blur(14px)`. Church-photo overlay uses `mix-blend-mode: multiply` at 60–100% opacity. Never frosted-glass-for-its-own-sake.

**Imagery vibe.**
- **Church / brand black-and-white** — heritage portraits (Father Hippolyte Leduc, Louis St-Laurent), interior texture, moody + grainy
- **Editorial color** — warm, saturated, top-down plating (smoked meat, poutine, cherry cola), cropped tight, real steam, real mustard stains. People interacting with food — hands, pickle-on-plate, curd-pulls
- Never: stock, styled-beige-minimalism, food-on-white-marble

**Layout rules.**
- **Asymmetry over grids** — menu cards overlap, titles break out
- **Full-bleed** wins — imagery crops hard, even across cards
- **Fixed** nav on cream bg, logo left, CTA right (red)
- **Billboards** are POSTER LAYOUT — giant word, tiny footer, logo corner

---

## Iconography

- **No icon system.** There is no Lucide/Heroicons set in this brand. Resist adding one.
- **Primary device:** the 45°-tilted fleur-de-lys logomark (see `assets/logomark.svg` and `assets/pattern-fleur.svg`). This serves every structural/separator purpose.
- **Secondary marks:** small ✦ stars between wordmarks (from brand-reveal slide 1: `MONTRÉAL ✦ LEDUC`). Unicode `✦` / `✧` / `•` (18 px dot) are acceptable.
- **Arrows & UI affordances:** Bebas Neue text ("SCROLL ↓") or thin 2px stroke arrows. Match stroke thickness to the font.
- **Emoji:** never in brand surfaces. Acceptable in social captions off-mark.
- **If you need a food pictogram** (menu legend, allergy, map pin), substitute **Lucide** outline at 2 px stroke — **flag the substitution**. Prefer real illustration/photography first.

When an icon truly doesn't exist in the brand, leave a labeled placeholder and ask.

---

## Substitutions & caveats

- **Bebas Neue** and **IBM Plex Mono** are self-hosted from `fonts/` (official brand files provided). **Courier Prime** and **Architects Daughter** still load from Google Fonts — please provide .ttf if we want to self-host. (The codebase has `Tanker`, `Telma`, `Dancing Script` in `font ideas/` — these are **explorations, not in use** on the final brand reveal.)
- **Icons** — brand currently has no icon set. We substitute Lucide where strictly needed and flag.
- **Photography** — the color food shots we copied (`photo-lifestyle-*.jpg`, `photo-elderly-cook.png`, `photo-smoked-meat-poutine.png`, `photo-resto-interior*.jpg`) are from the codebase `photos/` folder. The earlier B&W portrait photos (Louis St-Laurent, Father Hippolyte Leduc) exist in the source but we did not copy them — they're historic reference, not brand photography.
- **Website UI kit** is based on the **codex v1** experiment (`Saint Laurent/website/2026-03-18 codex v1/index.html`). The final website hasn't launched; we treat this and the brand reveal as the source of truth.

---

## Manifest — what's in this project

```
README.md                  — You are here. Brand context + voice + visuals.
colors_and_type.css        — Full token set (CSS vars). Import this in anything you build.
SKILL.md                   — Agent Skills shim for Claude Code.

assets/                    — Logos, pattern, editorial photography, IG posters
  logo-primary.svg
  logo-primary-inverse.svg
  logo-horizontal.svg
  logo-horizontal-inverse.svg
  logomark.svg             — 45° fleur-de-lys monogram (THE device)
  logomark-inverse.svg
  logo-pattern.svg         — repeat fleur
  avatar-social.svg
  pattern-fleur.svg
  brand-basics-tldr.png    — official one-pager
  photo-*.jpg/png          — editorial food + interior
  ig-post-*.png            — 5 exported IG layouts for reference

preview/                   — Design System tab cards (populated via register_assets)

ui_kits/
  website/                 — React recreation of the Saint Laurent website
    index.html             — Entry. Nav, Hero, Menu, Story, Gallery, Visit, Footer.
    Nav.jsx · Hero.jsx · Menu.jsx · Story.jsx · Gallery.jsx · Visit.jsx · Footer.jsx
    styles.css             — kit-scoped styles (uses tokens from colors_and_type.css)
```

> **Menu + Social UI kits** are planned but not yet built in this pass — the website kit demonstrates menu and poster layouts inline. Ping me if you want either broken out into its own kit next.

Open `preview/*.html` individually via the Design System tab, or dive into `ui_kits/website/index.html` to see a real surface.
