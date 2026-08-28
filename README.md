# NAR Ventures — component & token scaffold

Starting point for `packages/ui` (shared components) and the NAR Ventures
token layer, built for a Turborepo monorepo. Drop `packages/ui` and
`apps/nar-ventures` into the real repo structure and wire up `tsconfig`
paths / the Next.js app as usual — this scaffold is the file contents,
not a working repo (no `package.json` / build config included).

## Token layering — three layers, one direction of reference

```
packages/ui/tokens/primitives.css        <- raw values, no meaning
        |
apps/nar-ventures/styles/tokens.css      <- semantic names, real values
        |
packages/ui/components/**/*.module.css   <- reference semantic names ONLY
```

**Primitives** (`packages/ui/tokens/primitives.css`) are shared across every
app in the monorepo — raw hex values, nothing else.

**Semantic tokens** (`apps/nar-ventures/styles/tokens.css`) are the only
layer that should differ between apps. They alias primitives to
role-based names (`--color-signal`, `--fs-h2`, `--space-l`) and hold the
fluid `clamp()` type/space scale.

**Components** never reference a primitive or a raw px value directly —
only semantic variable names. This is what makes them portable: when
NAR New York comes off hold, it gets its own
`apps/nar-new-york/styles/tokens.css` exposing the *same* variable names
with its own values (different palette, different type scale if needed),
and every component in `packages/ui` works unmodified.

## Fluid sizing methodology

Every `--fs-*` and `--space-*` token is a `clamp(min, preferred, max)`
generated for a 375px → 1440px viewport range using the intrinsic/Utopia
method:

```
slope          = (maxPx - minPx) / (maxVw - minVw)
vw-coefficient = slope * 100
intersection   = (minPx - slope * minVw) / 16      // in rem
```

The values in `tokens.css` are hand-approximated to this formula and
rounded for readability. If you need to change a role's min/max size,
don't hand-edit the `vw` coefficient — regenerate it at
https://utopia.fyi/type/calculator (or /space/calculator) and paste the
new clamp() in. Comments next to each token record the min→max px pair
it was derived from, so future edits have something to check against.

## Components in this scaffold

- **Eyebrow** — the mono, tracked, dot-prefixed label used to open nearly
  every section.
- **Button** — primary/secondary, renders as a Next.js `<Link>` when
  `href` is passed, otherwise a native `<button>`.
- **SectionHeader** — composites Eyebrow + `<h2>` + optional lede. Pass
  `heading` as JSX to use the inline `<em>` emphasis pattern
  (`heading={<>...into <em>executable growth.</em></>}`).

## Still to build (see `index.ts` for the running list)

Navbar, Footer, TeaserGrid (variable column count — reused by Markets,
Industries, Services, Representative Experience), StatementBlock (the
full-bleed dark "one bold moment" stage), PillarCard / NumberedCard,
MediaBlock (fixed-aspect-ratio image container), Divider, FormField,
Tag/Chip, PageHeader (the shorter interior-page hero variant).

## Usage example

```tsx
import { SectionHeader, Button } from '@nar/ui';

<SectionHeader
  eyebrow="Capabilities"
  heading={<>The recommendation comes with the introduction <em>attached.</em></>}
  lede="We identify where value can be created across the transaction..."
/>
<Button variant="secondary" href="/capabilities">Explore capabilities</Button>
```
