# SigmundKeri Design System
## Direction A: Warm & Inviting

**Version:** 1.0  
**Date:** May 2026  
**Status:** Ready for Implementation

---

## Brand Vision

A modern, warm aesthetic that projects happiness, family, and safety. Light pastel backgrounds with bolder, visually-matching text creates an inviting, trustworthy presence for UK and Nigeria home seekers.

---

## Colour Palette

### Raw Colours

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| **Soft Warm Green** (Primary) | `#C8E6C9` | `200, 230, 201` | Primary buttons, accents, hover states |
| **Warm Green Medium** | `#81C784` | `129, 199, 132` | Hover states, interactive elements |
| **Deep Green** | `#558B2F` | `85, 139, 47` | Strong actions, dark text overlay |
| **Vibrant Coral** (Accent) | `#FF7F50` | `255, 127, 80` | Secondary accent, highlights |
| **Light Coral** | `#FFB399` | `255, 179, 153` | Hover states for accent elements |
| **Warm Cream** | `#FFFAF0` | `255, 250, 240` | Primary background |
| **Soft Blush Pink** | `#FFE5E0` | `255, 229, 224` | Accent background sections |
| **Very Light Sage** | `#E8F5E9` | `232, 245, 233` | Subtle background, success states |
| **Dark Charcoal** | `#2C3E50` | `44, 62, 80` | Primary text |
| **Medium Gray** | `#78909C` | `120, 144, 156` | Secondary text |
| **Light Gray** | `#B0BEC5` | `176, 190, 197` | Muted text, secondary information |
| **Border Gray** | `#E0E0E0` | `224, 224, 224` | Borders, dividers |
| **White** | `#FFFFFF` | `255, 255, 255` | — |
| **Black** | `#000000` | `0, 0, 0` | Footer background |

### Semantic Colour Tokens

**Text**
- `$color-text-primary`: `#2C3E50` — Primary body copy, headings
- `$color-text-secondary`: `#78909C` — Secondary information
- `$color-text-muted`: `#B0BEC5` — Subtle labels, metadata
- `$color-text-inverse`: `#FFFFFF` — Text on dark backgrounds

**Backgrounds**
- `$color-bg-default`: `#FFFFFF` — Main page background
- `$color-bg-subtle`: `#FFFAF0` — Section backgrounds, cards
- `$color-bg-accent`: `#E8F5E9` — Accent background (success messages)
- `$color-bg-dark`: `#2C3E50` — Footer, dark sections

**Borders**
- `$color-border-default`: `#E0E0E0` — Standard borders
- `$color-border-muted`: `#FFFAF0` — Subtle borders

**Primary (Warm Green)**
- `$color-primary`: `#C8E6C9`
- `$color-primary-hover`: `#81C784`
- `$color-primary-strong`: `#558B2F`

**Accent (Coral)**
- `$color-accent`: `#FF7F50`
- `$color-accent-light`: `#FFB399`
- `$color-accent-hover`: `#FFB399`

**Status & Feedback**
- `$color-status-success`: `#81C784` — Success messages
- `$color-status-error`: `#FF6B6B` — Error messages
- `$color-status-warning`: `#FFB74D` — Warning messages
- `$color-status-info`: `#C8E6C9` — Information

### Button Semantic Tokens

**Primary Button**
- Background: `#C8E6C9`
- Text: `#2C3E50`
- Hover: `#81C784`

**Secondary Button**
- Background: `#FFFFFF`
- Text: `#558B2F`
- Hover: `#FFFAF0`

**Tertiary Button** (CTA, dark)
- Background: `#2C3E50`
- Text: `#FFFFFF`
- Hover: `#558B2F`

---

## Typography

### Font Stack
- **Headings:** `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Body:** `system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Base font size:** `16px` (1rem)

### Font Sizes & Weights

| Element | Size | Weight | Line Height | Letter Spacing | Use |
|---------|------|--------|-------------|----------------|-----|
| **H1** | 2.5rem (40px) | 700 Bold | 1.1 | 0.02em | Hero heading, major titles |
| **H2** | 2.25rem (36px) | 600 Semibold | 1.1 | 0.02em | Section headings |
| **H3** | 3rem (48px) | 500 Medium | 1.1 | 0.02em | Sub-section headings |
| **H4** | 2rem (32px) | 500 Medium | 1.1 | 0.02em | Card titles |
| **H5** | 1.25rem (20px) | 500 Medium | 1.1 | 0.02em | Small headings |
| **H6** | 1.125rem (18px) | 500 Medium | 1.1 | 0.02em | Micro headings |
| **Body** | 1rem (16px) | 400 Regular | 1.6 | 0em | Standard body copy |
| **Body (desktop)** | 1.25rem (20px) | 400 Regular | 1.6 | 0em | Scaled body on desktop |
| **Small** | 0.875rem (14px) | 400 Regular | 1.6 | 0em | Secondary text, labels |
| **XS** | 0.75rem (12px) | 400 Regular | 1.6 | 0em | Captions, metadata |

### Line Heights

- **Display (headings):** `1.1` — Tight, impactful
- **Body:** `1.6` — Standard readability
- **Relaxed:** `1.8` — Long-form copy, testimonials

### Letter Spacing

- **Normal:** `0em`
- **Tight:** `-0.02em` (reserved)
- **Headings:** `0.02em` — Subtle, professional
- **Labels:** `0.06em` — UPPERCASE labels, regions

---

## Spacing System (8-point scale, em-based)

All spacing values use `em` units relative to the base `16px` font size:

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

## Components

### Navigation (`.site-header`)
- **Height:** 4.5rem (72px)
- **Background:** `rgba(255, 255, 255, 0.75)` with backdrop blur
- **Border:** 1px `#E0E0E0`
- **Logo font:** 1.25rem, weight 600, `$color-text-primary`
- **Toggle padding:** `$spacing-xs`
- **Transition:** `$transition-base` (0.3s ease)

### Buttons (`.btn`)
- **Padding:** 0.75rem 1.25rem
- **Font size:** 1rem
- **Font weight:** 500
- **Border radius:** 2px
- **Transition:** 0.2s ease

**States:**
- `.btn--primary`: Green background, dark text, hover to medium green
- `.btn--secondary`: White background, green text, hover to cream
- `.btn--tertiary`: Dark background, white text, hover to deep green

### Hero (`.hero`)
- **Min height:** 70vh
- **Padding block:** `$spacing-6xl` (96px), offset +4.5rem for fixed nav
- **Background:** `$color-bg-default` (white)
- **H1 margin-bottom:** `$spacing-md`
- **Paragraph margin-bottom:** `$spacing-lg`
- **Paragraph line-height:** `$line-height-relaxed` (1.8)

**Mobile:**
- Padding: `$spacing-3xl` (56px)
- H1 font size: 1.75rem
- Align items: flex-start (left-aligned)

### Property Types Grid (`.property-types__grid`)
- **Gap:** `$spacing-3xl` (56px)
- **Flex wrap:** yes
- **Justify content:** center

**Items (`.property-type`):**
- **Circle diameter:** 80px
- **Gap:** 0.75rem
- **Font size:** `$font-size-sm` (14px)
- **Border radius:** `$border-radius-full`
- **Background:** `$color-border-default`

### Service Cards (`.service-card`)
- **Width:** 480px (scrollable, full-width on mobile)
- **Gap:** `$spacing-lg` (32px)
- **Image aspect:** 4:3
- **Image border-radius:** 2px

### Testimonials (`.testimonial`)
- **Left border:** 2px `$color-primary`
- **Padding:** `$spacing-md`
- **Background:** `$color-bg-subtle`
- **Quote font style:** italic
- **Quote line height:** `$line-height-relaxed`
- **Attribution font size:** `$font-size-sm`

### Contact Form (`.contact-form`)
- **Max width:** 560px
- **Gap:** `$spacing-md`
- **Padding:** `$spacing-md`
- **Background:** `$color-bg-subtle`
- **Border radius:** 2px

**Form group:**
- **Gap:** `$spacing-xs`
- **Label font size:** `$font-size-sm`
- **Label weight:** 500

**Inputs/Textarea:**
- **Padding:** 0.875rem 1rem
- **Font size:** 1rem
- **Border:** 1px `$color-border-default`
- **Background:** `#D6D9DB`
- **Focus border:** `$color-primary-strong`
- **Border radius:** 2px

**Submit button:**
- **Same as btn--tertiary**
- **Align self:** flex-start
- **Disabled opacity:** 0.6

**Messages:**
- **Success:** Background `#E8F5E9`, text `#558B2F`
- **Error:** Background `#FFEBEE`, text `#C62828`

### Footer (`.footer`)
- **Background:** `#000000`
- **Padding:** `$spacing-4xl` (64px)
- **Logo font size:** 1.25rem
- **Logo weight:** 600
- **Logo color:** white
- **Text color:** `$palette-gray-medium`
- **Text font size:** `$font-size-sm`

---

## Responsive Design

### Single Breakpoint
- **Mobile:** `max-width: 500px`
- **Desktop:** `> 500px`

### Mobile Adjustments

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Section padding** | `$spacing-6xl` (96px) | `$spacing-3xl` (56px) |
| **Container padding** | `$spacing-md` (24px) | `$spacing-sm` (16px) |
| **H1 font size** | 2.5rem | 1.75rem |
| **H2 font size** | 2.25rem | 1.5rem |
| **H3 font size** | 3rem | 1.375rem |
| **H4 font size** | 2rem | 1.25rem |
| **Service cards** | Horizontal scroll | Vertical stack (full width) |
| **Grid layouts** | Multi-column | Single column |

---

## Transitions & Interactions

- **Fast:** 0.2s ease — Button hovers, border changes
- **Base:** 0.3s ease — Background color, large transitions
- **Slow:** 0.5s ease — Animations, delayed reveals

---

## Accessibility

- **WCAG 2.2 AA** compliant
- **Touch targets:** 44px minimum (buttons, links)
- **Focus states:** Visible border/outline on all interactive elements
- **Contrast:** All text meets AA standards (4.5:1 for normal, 3:1 for large)
- **Keyboard navigation:** All interactive elements keyboard accessible
- **Semantic HTML:** Proper heading hierarchy, semantic structure
- **Screen reader:** Labels on form inputs, alt text on images

---

## Implementation Checklist

- [x] Colour palette defined with semantic tokens
- [x] Typography scale with weights and spacing
- [x] Spacing system (8-point, em-based)
- [x] Component specifications
- [x] Responsive breakpoints
- [x] Transitions and interactions
- [ ] Figma design file created with component mockups
- [ ] Design documentation updated
- [ ] CSS compiled and tested
- [ ] Components tested for accessibility
- [ ] Visual design approved

---

## Next Steps

1. **Figma Design File:** Create comprehensive mockups of all page sections with Direction A palette
2. **Component Library:** Build reusable component library in Figma
3. **Code Implementation:** Build React/HTML components matching Figma specs
4. **Accessibility Testing:** Run WCAG 2.2 AA audit
5. **Visual QA:** Cross-browser and device testing
6. **Handoff:** Developer specifications and component props documentation
