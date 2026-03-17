# Astra UI Design System Guidelines

## Product character

This is a **B2C SaaS** product with a **minimal, clean, simple** UI style.

- **Density**: Breathable — generous whitespace, compact but not cramped
- **Surface strategy**: Layered — branded `brand-tertiary` canvas with `surface-bg` cards floating on top. Surface color creates hierarchy, not borders.
- **Color palette**: ~90% neutral surfaces. Brand color (`brand-primary`) is used sparingly for primary actions, active states, and small accents only. The `brand-tertiary` lavender canvas provides ambient identity.
- **Corner style**: Rounded (`corner-md` 8px default, `corner-lg` 16px for cards/overlays, `corner-full` for buttons/avatars)
- **Elevation**: Surface-color-driven — shadows reserved for floating overlays (toolbar, modal) only

## Reading order

**MUST READ before writing any code:**
1. This file (`overview.md`) — product character, rules, and workflows
2. `setup.md` — providers, CSS imports, build configuration
3. `foundations/` — all token files (color, typography, spacing, surfaces)
4. `components/overview.md` — full component catalog with alternative names

**Read on-demand:**
- `components/{name}.md` — read BEFORE using that component
- `composition/` — read when building page layouts or combining components

## Workflows

### Before using a component
1. Check `components/overview.md` for the component catalog
2. Read `components/{name}.md` for the specific component
3. Follow all rules, valid props, and usage notes in the guidelines file
4. Do NOT write code using a component until you have read its guidelines file

### Before using an icon
1. Check `icon-discovery.md` for available icons
2. Do NOT guess icon names — verify the icon exists first
3. If an icon doesn't exist, pick a different one and verify
4. Icons are ALWAYS imported from `lucide-react`, never from `@brettmcm/astraui`

### When building a layout
1. Read `composition/layouts.md` for page structure patterns
2. Read `composition/surfaces.md` for layering and background rules
3. Start with `SidebarNavigation` — every desktop page includes it
4. Apply spacing tokens — never hardcode pixel values
5. Use `brand-tertiary` as the page canvas, `surface-bg` for elevated content

## Rules

IMPORTANT: Every desktop page MUST include `SidebarNavigation` — the 60px dark icon rail on the far left. No exceptions.

IMPORTANT: The page background is ALWAYS `brand-tertiary`. Never use white or gray as the page canvas. Content cards use `surface-bg` and float on top.

IMPORTANT: Do NOT use `brand-primary` or `brand-secondary` as backgrounds for large areas — they are for small accents and interactive highlights only.

- Always use design system components over raw HTML elements (`InputField` not `<input>`, `SelectField` not `<select>`)
- All spacing must use design system tokens (`gap-xl`, `p-2xl`) — never hardcode pixel values
- Surface color defines layout hierarchy, not borders — do not add borders between layout regions
- Borders are for interactive elements only (buttons, inputs, clickable cards, floating overlays)
- Icons always come from `lucide-react` — never create inline SVGs or guess icon names
- Navigation hierarchy is strict: `SidebarNavigation` → `SecondaryNav` → `Tabs`. Never skip levels.
- Each logical section gets its own `surface-bg` card — never combine unrelated sections
- Complexity is revealed progressively — hide occasional controls behind expand, hover, or click
