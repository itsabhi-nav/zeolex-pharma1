# Zoelex Pharma — Implementation Report (v5)

## What was built
A premium B2B site for Zoelex Pharma, now in its **fifth visual pass (v5
"Teal & Ivory" final brand direction)**. Next.js 15 (App Router) ·
React 19 · TypeScript strict · zero runtime dependencies beyond Next/React.

## v5.9 changes (full-width header)
1. **Header is now full-bleed (client direction):** the floating rounded
   pill bar is gone. The bar spans the entire viewport width, sits flush to
   the top edge, and is 72px tall on desktop / 64px on mobile. A single
   hairline along the bottom edge separates it from the page, with a
   stronger ink backdrop blur so text stays readable over the hero imagery.
2. **Content aligned to the page grid:** the bar background is full width
   but its inner row is constrained to `--max-w` with `--gutter` padding, so
   the brand mark, navigation and CTA line up exactly with the page content
   below instead of floating at a different inset.
3. **Brand lockup scaled up:** logo badge 42px (38px mobile, was 34px) and
   the wordmark now 20-24px fluid, matching the taller bar.
4. **Nav interaction softened:** hover background switched from a pill to an
   8px radius so nothing in the header reads as a capsule.
5. **Header height token corrected:** `--header-h` 88px to 72px to match the
   real bar, which keeps hero and page-hero top padding accurate. Sticky
   format cards now stop 16px below the bar (was overlapping by 10px), and
   `scroll-padding-top` was added so in-page anchors no longer land under
   the fixed header.

## v5.8 changes (hero bottom bar removed)
7. **Hero bottom bar removed (client direction):** the "GMP · FSSAI · GLP
   certified" line and the scroll cue bar at the bottom edge of the hero
   felt random there; both removed, along with all their CSS (glass bar,
   scroll-cue rail, cuefall animation). The certification line now appears
   as a quiet muted note under the CTAs in the editorial intro section
   (it also remains in the stats band and footer). The hero is now a clean
   full-bleed statement: headline, lede, two CTAs.

## v5.7 changes (hero + stats de-AI pass)
1. **Hero certification line simplified:** the tick-marked separated row
   still read as decorative, so it is now a single plain muted text line
   ("GMP · FSSAI · GLP certified") next to the scroll cue; all chip/tick
   CSS removed.
2. **Hero eyebrow removed:** "Zoelex Pharma · Pune, India" dropped from the
   hero (redundant with the header brand and footer).
3. **Stats band cleaned up:** the coral tick lines removed; "GMP · FSSAI ·
   GLP" now sits on one line at a smaller display size; the countries cell
   reads "XX+ / Countries served" with a separate small "Pending
   verification" note (honesty marker preserved, oddness gone).
4. **"QC laboratory" tag removed** from the agar-plate image.

## v5.6 changes (hero marquee removed)
6. **Hero marquee band removed (client direction):** the sliding format
   strip directly below the hero is gone; the hero now flows straight into
   the editorial intro. The reversed strip stays only as the closing taste
   band at the very bottom of the page.

## v5.5 changes (marquee trim)
5. **Marquee trimmed (client direction):** the three certification phrases
   ("GMP certified", "FSSAI certified", "GLP certified") removed from the
   hero marquee band; it now scrolls the four delivery formats plus
   "Pune, India". Certification wording remains only in approved content
   copy (stats band, about, FAQ).

## v5.4 changes (logo + cert rail refinements)
1. **Logo no longer over-cropped:** the previous tight center-crop made the
   badge feel cut off. `logo-mark.png` is now the **full original logo**
   (whole white blob, gradient field and navy base shape), downscaled to
   512px; favicon and Apple touch icon updated to match. The badge now
   reads as a complete, deliberate brand mark in header and footer.
2. **Certification rail flattened:** no capsule/pill shapes this time. The
   hero rail is now a flat typographic row — bold small labels with mint
   ticks, separated by thin vertical hairlines; "Vegan · Pectin-based" is
   lit in mint within the same row. Quiet, editorial, premium.

## v5.3 changes (readability + logo + premium detail pass)
1. **Brand logo integrated:** `public/images/logo.jpg` cropped (centered
   square, via macOS `sips`, no image deps) into `logo-mark.png` (512px).
   Used as an app-icon-style rounded badge in the header and footer brand
   lockups, and as the site favicon (`app/icon.png`) and Apple touch icon
   (`app/apple-icon.png`) through Next's file conventions.
2. **Hero certification rail returned, redesigned:** segmented glass strip
   with hairline dividers; each certification (GMP / FSSAI / GLP) carries a
   mint tick, and "Vegan · Pectin-based" is a lit mint segment inside the
   same strip. The previous plain chip look is gone.
3. **Type scale sized up for readability** (client flagged small text):
   `--fs-xs` 13→14px, `--fs-sm` 14→16px, `--fs-base` 16→17px,
   `--fs-md` → 17-19px clamp. Applied globally through the same tokens, so
   feature lists (oral thin films list), footer description/links/contact,
   chips, captions and every other small-text context grew consistently
   across all pages.
4. **Marquee amplified:** larger bold words (up to 1.6rem) alternating
   with muted ones, mint separators, bigger gap; reads as a brand band now.
5. **Differentiator cards ("Why Zoelex" grid) detailed:** mint sweep line
   on hover, stronger hover tint, bold H3s, index numerals now bold mint.
6. **Footer hierarchy:** link column labels bolded, description lifted to
   17px, address line at 14px.
7. **Index numerals unified:** `.num` labels now bold mint with tracking,
   consistent on home (services minis) and global pages.

## v5.2 changes (Arial-only typography + hero simplification)
1. **Arial everywhere (client direction):** Manrope and Inter webfonts
   removed entirely; no Google Fonts imports or external font dependencies.
   `--font-display`, `--font-body` and `--font-mono` all resolve to
   `Arial, Helvetica, sans-serif`, applied through the same tokens, so
   headings, paragraphs, navigation, buttons, forms, tables and footer all
   render Arial. Zero woff2 files are served; text renders instantly with
   no font-loading swap. Visual hierarchy continues through the `--fs-*`
   size scale, weights (600-800 for headings/buttons) and colour.
2. **Hero certification bar removed:** the GMP / FSSAI / GLP /
   "Vegan · Pectin-based" chip rail was flagged as unnecessary and deleted
   from the hero (markup and CSS); the redesigned scroll cue stays as the
   only element in that bottom rail. Certification wording still exists in
   the approved stats band and content copy.

## v5.1 changes (premium polish pass)
1. **Reference-imagery captions removed everywhere:** all
   "Reference imagery · illustrative" caption chips/tags deleted from every
   page (client direction: images are never annotated). Captions that carry
   real editorial meaning ("Formats people actually enjoy", "QC laboratory",
   "Ayurveda × Modern Science") remain.
2. **Header:** explicit **Home** link added as the first nav item (desktop
   and mobile menu), and a new **capsule brand mark** (minimal mint line
   icon, `components/CapsuleMark.tsx`) now sits in the header and footer
   brand lockups.
3. **Hero certification rail upgraded:** plain chips replaced with a
   certification rail — mint dot + label capsules for GMP/FSSAI/GLP and a
   lit "Vegan · Pectin-based" chip with a live pulsing dot. Scroll cue
   redesigned as a hairline rail with a traveling mint light.
4. **Marquee upgraded:** larger Manrope type with alternating
   emphasis/muted words and mint separators, so the format strip reads as a
   brand statement instead of a label row.
5. **Stats band:** each stat cell now carries a coral tick line in the top
   corner, giving the strip deliberate structure.
6. **Footer wordmark rebuilt:** giant Manrope 800 with an ivory fade-out
   gradient and "Pharma" lit in mint (solid low-contrast fallback via
   `@supports` for browsers without background-clip).
7. **Six capabilities section fully redesigned** (was a flat ledger, weak on
   mobile and desktop): now a responsive 3/2/1-column card grid, each card
   with a large tabular index, a mint circular line icon (factory, tag,
   flask, box, document, globe), Manrope heading, and the value line pinned
   below a hairline rule; hover lift with a mint sweep line.

## v5 changes (final brand colour + typography direction)
1. **Colour system — refined scientific-futurist, fully tokenised:**
   - `--ink: #092C2E` (Midnight Teal) for immersive dark sections;
     `--ink-2/--ink-3/--wash` form the Deep Teal family for elevated
     surfaces, card gradients and hairlines.
   - `--bone: #F7F5EF` (Warm Ivory) for editorial and information-heavy
     sections; `--bone-panel/--bone-2/--bone-line` for panels and rules.
   - `--mint: #75E0C1` (Electric Mint) for primary interactions, scientific
     accents, selection, focus and CTA buttons (dark teal text on mint =
     9.3:1 contrast); `--mint-2/--mint-3` for hover and light accents.
   - `--coral: #F07868` for small scientific labels, numerals and warm
     emphasis; `--coral-deep: #B34A3D` for coral on ivory (4.9:1 contrast).
   - Light-dark rhythm unchanged structurally: dark teal immersive sections
     alternate with warm ivory editorial sections on every page.
   - Every colour lives in `:root` tokens in `app/globals.css`; no raw hex
     values in TSX/TS (verified). All old navy/blue palette removed.
2. **Typography — Manrope + Inter, self-hosted:**
   - **Manrope** (variable, self-hosted via `next/font`) for display
     headlines, section headings, navigation, buttons and product names:
     800 hero H1, 700 section H2/display base, 600 H3/buttons,
     500 nav and secondary UI.
   - **Inter** for body copy, tables, forms and information-dense content
     (400 body, 500 labels, 600 emphasis).
   - Responsive sizing through the existing `--fs-*` clamp() token scale;
     deliberate line breaks in the hero (staggered line reveal);
     slightly negative tracking on large display only; no italics and no
     excessive weights remain (all `550` weights normalised to 600).
   - Fallback stacks via CSS variables; text stays readable while fonts load.

## v4.2 changes (usability-heuristics audit: 8 fixes)
1. **Format-card consistency:** the fourth format card (Liposomal) is now the
   same dark navy gradient as the other three; its "Discuss Liposomal" button
   uses the standard blue `btn--coral` style. The light-card CSS overrides and
   the `btn--ink` / `chip--paper` conditionals are removed.
2. **Single type scale:** nine size tokens (`--fs-xs` … `--fs-3xl`, `--fs-stat`)
   defined in `:root` and applied to every `font-size` in the stylesheet and
   inline styles. Declared sizes on the homepage dropped from 16 distinct
   values to the 9 tokens plus two intentional exceptions (stat superscript,
   giant footer wordmark).
3. **Image captions legible:** `frame__cap` / `frame__tag` moved from 12px to
   13px (`--fs-xs`).
4. **Footer outline fixed:** the three footer nav headings are `<h2>` instead
   of `<h4>` (previous heading was H2; no more skipped level).
5. **Consistent button arrows:** every primary/ghost CTA now ends with the
   arrow chip ("Explore Our Technologies", "Why Zoelex", "Browse Products",
   "See example products", "Quality questions? Read the FAQs",
   "Message us on WhatsApp", careers mailto). `btn--paper-ghost` arrows get a
   dark tint so they stay visible on paper sections.
6. **Balanced differentiator grid:** when the last row of the 12-column
   `.values` grid holds 3 items, those widen to span 4 columns each (4+3
   layout), removing the orphan cell. 6- and 8-item grids are unaffected;
   guarded by `@media (min-width: 1001px)`.
7. **One primary action colour:** all remaining black `btn--ink` CTAs
   ("Explore All Categories", "Inside Our Facility", "Work with us",
   "Enquire") switched to the blue `btn--coral`; `.btn--ink` stays defined but
   is no longer used.
8. **Literal liposomal visual:** the home-page liposomal card image changed
   from the abstract leaf-droplets shot to `oil-bubbles.jpg` (macro oil
   bubbles in liquid), closer to how encapsulation actually looks.

## v4 changes (AI-tell removal sweep)
1. **Typography reset to the engineering-led standard:**
   - **Geist** for everything (display, body, UI, buttons, nav) and
     **Geist Mono** only for small numerals. The decorative serif display,
     italic accents and wide-tracked mono labels are all gone.
   - Headings are sentence case, tight-tracked, weight 600. No uppercase
     micro-labels, no letterspaced eyebrows, no outlined ghost numerals.
2. **Copy de-slopped:** every em dash removed from visible copy and metadata
   (37 replacements, reworded as commas/colons/parentheses). Slash-style
   section indices ("02 / PROCESS"), "STEP 01" prefixes and "Q01" FAQ labels
   removed entirely.
3. **Ornaments removed:** gradient aurora blobs deleted from every page and
   component; footer wordmark is now solid low-contrast instead of outlined;
   marquee separators are plain middots; the compare-table header no longer
   uses uppercase mono.
4. What remains is deliberately functional: hairline grids, film grain at
   3.5% opacity, directional reveals, parallax, count-ups, Ken Burns hero
   image, sticky format cards.
5. **v4.1 (client pass):** Geist replaced with **plain Inter** (single
   family, no mono webfont at all; numeral labels render Inter too).
   Brown/bronze palette replaced with **deep navy + blue accent** (#3f6df5
   accent, cool white paper sections). Heading tracking softened to
   -0.01/-0.015em so it reads natural rather than styled.

## Earlier passes
- **v2:** pages consolidated 11 → 6 with anchor-merged content and 308
  redirects for all legacy routes; scroll storytelling added (sticky pinned
  format cards, directional reveals, parallax, count-ups, marquees, glass
  header + progress bar).
- **v3:** green palette replaced with warm ink/bone/bronze; hero rebuilt as a
  full-bleed editorial layout; unique photography per slot (24 open-licence
  images, credits in `ASSETS.md`); technical caption chips removed.
- **v1→v3 details:** see git-less folder history; architecture unchanged since
  v2.

## Architecture & content integrity (standing)
- **6 pages** (nav consolidated from 11): `/`, `/about` (+ `#why-zoelex`,
  `#careers`, `#how-we-work`), `/technologies` (+ `#categories`),
  `/manufacturing` (+ `#services`, `#quality`), `/global`, `/contact`
  (+ `#faqs`). All 7 legacy routes 308-redirect to their merged anchors.
- Every approved sentence preserved verbatim (10-row matrix, 4 technologies,
  6 services, 5 quality stages, 7 differentiators, 6-step process, 9 FAQs,
  contact details, disclaimer). Nothing invented: figures remain explicit
  placeholders.
- SEO/accessibility: per-page metadata + canonicals, Open Graph, FAQPage
  JSON-LD, sitemap, robots, skip link, keyboard-operable controls, visible
  focus, `prefers-reduced-motion` honored throughout.
- Form: validates then opens the visitor's email client pre-filled to
  info@zoelexpharma.com (no fake success). Backend hook documented in
  `components/EnquiryForm.tsx`.

## Routes
6 pages + 2 legal drafts (noindex) + custom 404 + sitemap + robots.

## Form (unchanged honesty)
Full client-side validation → hands off to the visitor's email client
pre-filled to info@zoelexpharma.com (real delivery path, truthful status).
Backend hook point documented in `components/EnquiryForm.tsx`.

## Checks actually run
- `next build`: 13 routes, 0 type errors, ~103 kB shared JS.
- Production server: all 6 content pages + legal drafts → 200; all 7 legacy routes → 308 to correct anchors; 404 page works.
- Served-HTML sweep: 0 em dashes, 0 slash-style indices, 0 "STEP/Q" prefixes, 0 uppercase-transformed text, 0 ghost numerals, 0 aurora blobs; single Inter woff2 loading; every image slot unique and resolving 200; `?category=…&format=…` prefill works; FAQ JSON-LD present.
- v4.2 re-verified after the usability fixes: all pages 200, 9 `--fs-*` tokens in the served CSS (only the stat superscript and footer wordmark kept as literals), zero `btn--ink` in served HTML, zero `chip--paper`, footer headings are H2, arrows present on every CTA checked, liposomal card serves `oil-bubbles.jpg`, the 4+3 values-grid rule ships in the CSS bundle.
- v5 re-verified: served CSS carries the final palette (`--ink:#092C2E`, `--mint:#75E0C1`, `--coral:#F07868`, `--bone:#F7F5EF`), zero old navy/blue hexes, exactly 2 self-hosted woff2 files (Manrope + Inter), no raw hexes in TSX/TS, no italics; contrast pairs verified (mint button 9.3:1, body text 13:1, muted text 6.7:1, coral labels 5.3:1 dark / 4.9:1 on ivory).

## Remaining for the client
1. Verify certification wording before launch.
2. Supply: countries-served figure, MOQs, capacity/area, founding year,
   catalogue PDF, real facility/product photos, testimonials, social URLs.
3. Connect enquiry form to a backend/email service.
4. Replace canonical domain if different from zoelexpharma.com.

## Run
```bash
npm run dev
npm run build && npm start
```
