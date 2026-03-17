# Component Catalog

Always prefer components from `@brettmcm/astraui` over plain HTML elements. Do NOT write code using a component until you have read its guidelines file.

```tsx
import { Button, Avatar, InputField } from '@brettmcm/astraui'
```

## Buttons & actions

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| Button | CTA, action button | Primary, neutral, subtle actions | [button.md](button.md) |
| ButtonGroup | Button bar, action group | Grouped related actions with alignment | [button.md](button.md) |
| FavoriteButton | Like button, star button | Toggle favorite/star state | [button.md](button.md) |

## Inputs & forms

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| InputField | Text input, text field | Single-line text entry with label/description | [input.md](input.md) |
| TextareaField | Multi-line input, text area | Multi-line text entry with label/description | [input.md](input.md) |
| SelectField | Dropdown, select, picker | Dropdown selection from predefined options | [input.md](input.md) |
| SearchComponent | Search bar, search input | Search with animated placeholder | [input.md](input.md) |
| Checkbox | Check, boolean input | Boolean selection with label/description | [input.md](input.md) |
| RadioGroup | Radio buttons, single select | Mutually exclusive choices | [input.md](input.md) |
| SwitchField | Toggle, switch | On/off toggle setting | [input.md](input.md) |
| PromptInput | Chat input, message input | AI prompt text entry with send/attach | [chat.md](chat.md) |

## Navigation

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| SidebarNavigation | Sidebar, nav rail, app shell | Persistent 60px icon rail — every page | [navigation.md](navigation.md) |
| SidebarButton | Nav icon, sidebar icon | Icon button for SidebarNavigation | [navigation.md](navigation.md) |
| SecondaryNav | Sub-nav, section nav, side panel | Secondary navigation for sub-sections | [navigation.md](navigation.md) |
| SecondaryNavItem | Sub-nav item, section link | Item within SecondaryNav | [navigation.md](navigation.md) |
| Tabs | Tab bar, tab switcher | Tertiary content switching within a section | [tabs.md](tabs.md) |
| SegmentedControl | Switcher, toggle group | Inline icon switcher | [tabs.md](tabs.md) |

## Media & content

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| Avatar | Profile image, user photo | User/entity profile image or initials | [media.md](media.md) |
| AvatarGroup | Avatar stack, user group | Grouped avatar display with overflow | [media.md](media.md) |
| ItemCard | Video card, content card | Content card with thumbnail and metadata | [media.md](media.md) |
| DurationBadge | Timecode, duration label | Compact timecode label for video thumbnails | [media.md](media.md) |
| VideoControl | Video player, playback controls | Video playback controls with seek bar | [media.md](media.md) |

## Feedback & status

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| Toast | Notification, snackbar | Brief notification with progress | [feedback.md](feedback.md) |
| Badge | Label, tag, status pill | Status labels and counters | [feedback.md](feedback.md) |
| Tooltip | Hint, popover, info tip | Contextual hint on hover/focus | [feedback.md](feedback.md) |
| Modal | Dialog, popup, overlay | Focused task dialog with backdrop | [modal.md](modal.md) |

## Chat & AI

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| ChatBubbles | Message, chat message | AI or user chat message bubble | [chat.md](chat.md) |
| PromptInput | Chat input, message box | Text input with send/attach for AI prompts | [chat.md](chat.md) |
| PromptPane | Chat panel, chat sidebar | Full chat container with messages + input | [chat.md](chat.md) |

## Toolbar

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| Toolbar | Tool palette, action bar | Floating toolbar container | [toolbar.md](toolbar.md) |
| ToolbarItem | Tool button, toolbar icon | Icon button within a Toolbar | [toolbar.md](toolbar.md) |

## Layout & utility

| Component | Alt names | Purpose | Guidelines |
|---|---|---|---|
| AstraLogo | Logo, brand mark | Brand mark SVG | — |
| ThemeProvider | Theme wrapper, dark mode | App root provider for theme management | See `setup.md` |

## Button variant decision tree

```
┌─ "What button variant should I use?"
│
├─ Main call-to-action (one per section)?
│  └─ variant="primary"
│
├─ Supporting action alongside a primary?
│  └─ variant="neutral" ⭐ Default for secondary actions
│
└─ Subtle or low-emphasis action?
   └─ variant="subtle"
```

Rules:
- Only one `primary` button per visible section
- Do not use variant names that don't exist (`"secondary"`, `"ghost"`, `"destructive"`)
- Valid variants are: `"primary"`, `"neutral"`, `"subtle"` — nothing else

## Input component selection

```
┌─ "How should the user provide input?"
│
├─ Choose from mutually exclusive options?
│  └─ RadioGroup
│
├─ Choose from predefined options (dropdown)?
│  └─ SelectField
│
├─ Boolean on/off (setting with label)?
│  └─ SwitchField
│
├─ Boolean on/off (form field)?
│  └─ Checkbox
│
├─ Freeform short text?
│  └─ InputField
│
├─ Freeform long text?
│  └─ TextareaField
│
└─ Search with animated placeholder?
   └─ SearchComponent
```

## Feedback component selection

```
┌─ "How should I show information to the user?"
│
├─ Brief notification with progress?
│  └─ Toast — "Uploading...", "Changes saved"
│
├─ Status label or counter?
│  └─ Badge — "New", "Active", "3 items"
│
├─ Contextual hint on hover?
│  └─ Tooltip — icon button labels, abbreviation explanations
│
└─ Requires user decision or focused task?
   └─ Modal — confirmations, export settings, forms
```

## Navigation hierarchy

```
┌─ "What navigation component should I use?"
│
├─ App-level navigation (always present)?
│  └─ SidebarNavigation + SidebarButton (PRIMARY)
│
├─ Page sub-sections (settings, detail views)?
│  └─ SecondaryNav + SecondaryNavItem (SECONDARY)
│
└─ Content switching within a section?
   └─ Tabs (TERTIARY)
```

IMPORTANT: Never skip navigation levels. Every desktop page includes SidebarNavigation. Use SecondaryNav for sub-sections, not Tabs.

## Common props

Most components accept:
- `className`: String for additional CSS classes
- `disabled`: Boolean to disable the component

Form components additionally accept:
- `label`: Field label text
- `description`: Helper text below the label
- `onChange`: Simplified callback — `(value) => void`, not native event
