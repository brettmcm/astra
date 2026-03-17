# Project Setup

## Required CSS imports

Styles are auto-imported when you import any component from `@brettmcm/astraui`. No additional CSS import is needed in most cases.

```tsx
import { Button, Avatar, Badge } from '@brettmcm/astraui'
// Styles load automatically — no CSS import required
```

If styles aren't loading, explicitly import the stylesheet in your root `main.tsx`:

```tsx
import '@brettmcm/astraui/styles.css'
```

Do NOT add `@source` rules for this package in the consumer's Tailwind config. The package ships pre-compiled CSS with all required utility classes.

## Theme provider

Wrap your app root with `ThemeProvider`. This is required for dark mode support and theme persistence.

```tsx
import { ThemeProvider } from '@brettmcm/astraui'

function App() {
  return (
    <ThemeProvider>
      {/* app content */}
    </ThemeProvider>
  )
}
```

`ThemeProvider` reads `localStorage('astra-theme')` on mount and falls back to `prefers-color-scheme`. It manages the `.dark` class on `<html>` automatically.

### Theme hook

Use `useTheme` in any child component to read or toggle the theme:

```tsx
import { useTheme } from '@brettmcm/astraui'

function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useTheme()
  return <Button onClick={toggleTheme}>{theme}</Button>
}
```

`ThemeProvider` must be an ancestor of any component calling `useTheme()`.

## Build configuration

Astra UI is built with Vite and the `@tailwindcss/vite` plugin. The standard `vite.config.ts` for the library:

```tsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Library build

Run `npm run build:lib` to produce the distributable package. This outputs:
- ESM (`.mjs`)
- CJS (`.cjs`)
- Pre-compiled CSS

Consumers do NOT need Tailwind configured to use this package — CSS ships pre-compiled.

## Rules

- Do not add `@source` rules for `@brettmcm/astraui` in consumer Tailwind configs
- `ThemeProvider` is required at the app root for dark mode to work
- CSS import order does not matter — there is only one stylesheet
- All styling uses design system tokens mapped via `@theme inline` — use Tailwind classes that reference Astra tokens (e.g. `bg-brand-tertiary`, `gap-xl`), not arbitrary values
