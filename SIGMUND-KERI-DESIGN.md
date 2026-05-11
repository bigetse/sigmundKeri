# SigmundKeri Design System
## Direction A: Warm & Inviting

**Version:** 1.0  
**Last Updated:** May 2026  
**Status:** Ready for Implementation

This is the primary design reference. For complete token definitions, see `DESIGN-SYSTEM-FINAL.md`.

---

## Mission

Practical design-system reference for SigmundKeri. Engineers and designers use this to stay consistent. All values are defined as **semantic tokens** in `assets/scss/_variables.scss` — never hardcode values in components.

---

## Brand Vision

**Direction A: Warm & Inviting**

A modern aesthetic with soft pastel colours and vibrant accents that projects happiness, family, and safety. Light, warm backgrounds with bold, visually-matching text create an inviting, trustworthy presence for UK and Nigeria home seekers.

**Tone:** Clear, friendly, warm, trustworthy. Avoid ambiguous labels or low-contrast text.

---

## Colour Palette

### Primary Palette (Direction A)

| Name | Hex | Use |
|------|-----|-----|
| **Soft Warm Green** | `#C8E6C9` | Primary buttons, accents, interactive elements |
| **Warm Green (Medium)** | `#81C784` | Hover states |
| **Deep Green** | `#558B2F` | Strong actions, text overlays |
| **Vibrant Coral** | `#FF7F50` | Secondary accents, highlights |
| **Light Coral** | `#FFB399` | Hover states, secondary accents |
| **Warm Cream** | `#FFFAF0` | Primary background |
| **Soft Blush** | `#FFE5E0` | Accent backgrounds |
| **Light Sage** | `#E8F5E9` | Subtle backgrounds, success |
| **Dark Charcoal** | `#2C3E50` | Primary text |
| **Medium Gray** | `#78909C` | Secondary text |
| **Light Gray** | `#B0BEC5` | Muted text |
| **Border Gray** | `#E0E0E0` | Borders, dividers |

### Semantic Tokens

All colours referenced via semantic tokens in `_variables.scss`:

**Text:** `$color-text-primary`, `$color-text-secondary`, `$color-text-muted`, `$color-text-inverse`

**Backgrounds:** `$color-bg-default`, `$color-bg-subtle`, `$color-bg-accent`, `$color-bg-dark`

**Borders:** `$color-border-default`, `$color-border-muted`

**Primary:** `$color-primary`, `$color-primary-hover`, `$color-primary-strong`

**Accent:** `$color-accent`, `$color-accent-light`, `$color-accent-hover`

**Status:** `$color-status-success`, `$color-status-error`, `$color-status-warning`, `$color-status-info`

---

## Typography

### Font Stack

- **Headings:** `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Body:** `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Base font size:** `16px` (1rem)

### Font Sizes & Weights

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| **H1** | 2.5rem | 700 (bold) | 1.1 | 0.02em |
| **H2** | 2.25rem | 600 (semibold) | 1.1 | 0.02em |
| **H3** | 3rem | 500 (medium) | 1.1 | 0.02em |
| **H4** | 2rem | 500 (medium) | 1.1 | 0.02em |
| **H5** | 1.25rem | 500 (medium) | 1.1 | 0.02em |
| **H6** | 1.125rem | 500 (medium) | 1.1 | 0.02em |
| **Body** | 1rem | 400 (regular) | 1.6 | 0em |
| **Body (desktop)** | 1.25rem | 400 (regular) | 1.6 | 0em |
| **Small** | 0.875rem | 400 (regular) | 1.6 | 0em |
| **XS** | 0.75rem | 400 (regular) | 1.6 | 0em |

### Line Heights

- **Display (headings):** `1.1` — Tight, impactful
- **Body:** `1.6` — Standard readability
- **Relaxed:** `1.8` — Long-form, testimonials

### Letter Spacing

- **Normal:** `0em`
- **Headings:** `0.02em` — Subtle, professional
- **Labels:** `0.06em` — UPPERCASE labels, regions

---

## Spacing System (8-point scale, em-based)

All spacing values use `em` units relative to 16px base:

| Variable | Value | Pixels | Use |
|----------|-------|--------|-----|
| `$spacing-xs` | 0.5rem | 8px | Tiny gaps, padding |
| `$spacing-sm` | 1rem | 16px | Small gaps, form padding |
| `$spacing-md` | 1.5rem | 24px | Standard padding, gaps |
| `$spacing-lg` | 2rem | 32px | Large gaps, section padding |
| `$spacing-xl` | 2.5rem | 40px | Extra large gaps |
| `$spacing-2xl` | 3rem | 48px | Major section spacing |
| `$spacing-3xl` | 3.5rem | 56px | Large section gaps |
| `$spacing-4xl` | 4rem | 64px | Hero, major sections |
| `$spacing-6xl` | 6rem | 96px | Full section vertical padding |

---

## Components & Layout

### Navigation (`.site-header`)
- Fixed position, backdrop blur, 4.5rem height
- `$color-text-primary` logo at 1.25rem, weight 600
- `$transition-base` animations

### Buttons (`.btn`)
All buttons use semantic tokens:
- `.btn--primary`: `$btn-primary-bg` → hover `$btn-primary-hover`
- `.btn--secondary`: `$btn-secondary-bg` → hover `$btn-secondary-hover`
- `.btn--tertiary`: `$btn-tertiary-bg` → hover `$btn-tertiary-hover`

Padding: 0.75rem 1.25rem, border-radius: 2px

### Hero (`.hero`)
- Min-height: 70vh
- Padding: `$spacing-6xl` (96px), offset for fixed nav
- H1 margin-bottom: `$spacing-md`
- Paragraph line-height: `$line-height-relaxed`
- Mobile: `$spacing-3xl` padding, left-aligned

### Property Types Grid
- Gap: `$spacing-3xl`, circles 80px, border-radius: full

### Service Cards
- Width: 480px, gap: `$spacing-lg`, scrollable on mobile
- Image aspect: 4:3, border-radius: 2px

### Testimonials
- Left border: 2px `$color-primary`
- Padding: `$spacing-md`, background: `$color-bg-subtle`
- Quote: italic, line-height: `$line-height-relaxed`

### Contact Form
- Max-width: 560px, padding: `$spacing-md`
- Background: `$color-bg-subtle`, border-radius: 2px
- Form group gap: `$spacing-xs`
- Input focus: border `$color-primary-strong`
- Success: `#E8F5E9` bg, `#558B2F` text
- Error: `#FFEBEE` bg, `#C62828` text

### Footer
- Background: dark (charcoal), padding: `$spacing-4xl`
- Logo: 1.25rem, weight 600, white text
- Text: `$palette-gray-medium`, font-size: `$font-size-sm`

---

## Responsive Design

### Breakpoint
- **Mobile:** `max-width: 500px`
- **Desktop:** `> 500px`

### Mobile Adjustments
- Section padding: `$spacing-3xl` instead of `$spacing-6xl`
- Container padding: `$spacing-sm` instead of `$spacing-md`
- Headings: Scale down (H1 to 1.75rem, H2 to 1.5rem)
- Service cards: Vertical stack (full width)
- Grids: Single column

---

## Transitions & Interactions

- `$transition-fast`: 0.2s ease — Button hovers, borders
- `$transition-base`: 0.3s ease — Background, large transitions
- `$transition-slow`: 0.5s ease — Animations, reveals

---

## Accessibility

- **WCAG 2.2 AA** compliant
- **Touch targets:** 44px minimum
- **Focus states:** Visible on all interactive elements
- **Contrast:** AA standard (4.5:1 normal, 3:1 large)
- **Keyboard navigation:** All interactive elements accessible
- **Semantic HTML:** Proper heading hierarchy
- **Screen reader:** Labels on inputs, alt text on images

---

## Design Rules

**Do:**
- Reference semantic tokens (`$color-primary`, `$spacing-md`) — never raw hex/values
- Use the typography scale (H1–H6) for all headings
- Apply `$transition-base` or `$transition-fast` to state changes
- Ensure 44px+ touch targets
- Test focus states and keyboard navigation

**Don't:**
- Hardcode colour or spacing values
- Use fonts outside the stack
- Skip focus states on interactive elements
- Mix spacing units (always em-based)
- Add decorative motion without purpose
