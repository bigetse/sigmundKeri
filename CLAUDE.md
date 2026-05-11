# Memory

## Project
**SigmundKeri** — Real estate platform for UK & Nigeria. Multi-service (Buy, Rent, Invest) with lead capture form and testimonials.

## Key Components
| Component | Status | Notes |
|-----------|--------|-------|
| HTML structure | ✓ Complete | Full semantic markup with 12 sections |
| Design system | ✓ Documented | SIGMUND-KERI-DESIGN.md defines all tokens & components |
| CSS | In progress | SCSS architecture with variables, components |
| JavaScript | In progress | Form handling, nav toggle, interactions |

## Tech Stack
- HTML5 (semantic, accessible)
- SCSS (variables, components structure)
- Vanilla JS (form submission, nav toggle)
- Node.js project (package.json exists)

## Design Standards
- WCAG 2.2 AA accessibility required
- Minimal, clean aesthetic; ample whitespace
- Colour tokens: primary, accent, text, bg
- Responsive: mobile breakpoint only (no tablet)
- Components: nav, hero, service-block, testimonials, homes-grid, contact-form

## Preferences
- Design system first: edit `_variables.scss` for global changes
- No hardcoded values in components
- Keyboard-first interactions
- Semantic HTML before ARIA
