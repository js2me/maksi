# Conventions

## Tailwind: no arbitrary values in class strings

Never use arbitrary values or inline CSS-variable references in Tailwind classes. Everything goes through named theme tokens or the dynamic spacing scale.

**Forbidden:**
- arbitrary px/values: `text-[15px]`, `w-[3px]`, `min-w-[280px]`, `max-h-[120px]`, `leading-[1.35]`
- arbitrary var refs: `bg-[color:var(--x)]`, `shadow-[var(--x)]`
- inline var shorthand: `shadow-(--x)`, `text-(--x)` — still an inline var ref, not a named token

**Allowed:**
- named theme tokens: `text-sm-plus`, `bg-danger`, `shadow-message-bubble`, `leading-message`, `max-w-sidebar`, `rounded-br-sm`
- dynamic spacing scale (`calc(var(--spacing) * N)`, any N incl. decimals): `py-2.25`, `min-w-70`, `max-h-30`, `w-0.75`
- canonical Tailwind utilities: `text-sm`, `rounded-sm`, `leading-tight`

Genuinely dynamic per-instance values computed from props (e.g. `Avatar`'s size-derived `font-size`/`width`) may stay in `style={{}}` — this rule targets Tailwind class strings.

## Token architecture (`src/index.css`)

Two layers:
1. Raw vars in `:root` (light) + `.dark` (dark): `--on-accent`, `--danger`, `--message-bubble-shadow`, …
2. `@theme inline` maps raw vars to Tailwind namespaces, generating named utilities:
   - `--color-*` → `bg-*` / `text-*` / `border-*`
   - `--text-*` → `text-*` (font-size; bare = size only, no line-height)
   - `--leading-*` → `leading-*`
   - `--spacing-*` → `w-*` / `h-*` / `min-w-*` / `max-w-*` / `p-*` / `gap-*` / …
   - `--radius-*` → `rounded-*`
   - `--shadow-*` → `shadow-*`
   - `--max-w-*` → `max-w-*`

Adding a value: define the raw var in `:root` + `.dark`, then add `--<namespace>-<name>: var(--<raw>)` (or a literal) in `@theme inline`.

> Tailwind v4 font-size namespace is `--text-*`, **not** `--font-size-*`. A bare `--text-*` without `--text-*--line-height` sets font-size only.

## Prefer Tailwind + components over `@layer components` CSS

Don't add component classes to `@layer components`. Express styles as Tailwind utilities in TSX (conditional classes driven by Solid accessors), or extract a reusable component in `src/shared/ui/`. The only CSS in `@layer components` should be things genuinely awkward as utilities (e.g. `.chat-wallpaper`'s SVG data-URI) and responsive `@media` overrides. No `!important` cascades — use conditional classes instead.
