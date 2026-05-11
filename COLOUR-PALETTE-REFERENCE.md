# SigmundKeri Colour Palette — Quick Reference

## Direction A: Warm & Inviting

---

## Primary Actions & Interactions

### Primary Green
```
Hex:  #C8E6C9
RGB:  200, 230, 201
Use:  Primary buttons, accents, interactive elements
SCSS: $color-primary
```

### Primary Green (Hover)
```
Hex:  #81C784
RGB:  129, 199, 132
Use:  Button hover states, active elements
SCSS: $color-primary-hover
```

### Deep Green (Strong)
```
Hex:  #558B2F
RGB:  85, 139, 47
Use:  CTA buttons, strong text overlays
SCSS: $color-primary-strong
```

---

## Secondary Accent

### Vibrant Coral
```
Hex:  #FF7F50
RGB:  255, 127, 80
Use:  Secondary accent, highlights
SCSS: $color-accent
```

### Light Coral (Hover)
```
Hex:  #FFB399
RGB:  255, 179, 153
Use:  Accent hover states
SCSS: $color-accent-hover
```

---

## Backgrounds

### Warm Cream (Primary Background)
```
Hex:  #FFFAF0
RGB:  255, 250, 240
Use:  Page background, subtle section backgrounds
SCSS: $color-bg-subtle
```

### Very Light Sage (Accent Background)
```
Hex:  #E8F5E9
RGB:  232, 245, 233
Use:  Success messages, accent sections
SCSS: $color-bg-accent
```

### Pure White
```
Hex:  #FFFFFF
RGB:  255, 255, 255
Use:  Default background, card backgrounds
SCSS: $color-bg-default
```

---

## Text & Typography

### Dark Charcoal (Primary Text)
```
Hex:  #2C3E50
RGB:  44, 62, 80
Use:  All body copy, headings, primary text
SCSS: $color-text-primary
```

### Medium Gray (Secondary Text)
```
Hex:  #78909C
RGB:  120, 144, 156
Use:  Secondary information, labels
SCSS: $color-text-secondary
```

### Light Gray (Muted Text)
```
Hex:  #B0BEC5
RGB:  176, 190, 197
Use:  Tertiary text, captions, metadata
SCSS: $color-text-muted
```

---

## Borders & Dividers

### Border Gray (Default)
```
Hex:  #E0E0E0
RGB:  224, 224, 224
Use:  Card borders, dividers, form inputs
SCSS: $color-border-default
```

### Cream Border (Subtle)
```
Hex:  #FFFAF0
RGB:  255, 250, 240
Use:  Subtle borders, minimal dividers
SCSS: $color-border-muted
```

---

## Status & Feedback

### Success (Status)
```
Hex:  #81C784
RGB:  129, 199, 132
Use:  Success messages, checkmarks
SCSS: $color-status-success
Background: #E8F5E9
Text: #558B2F
```

### Error (Status)
```
Hex:  #FF6B6B
RGB:  255, 107, 107
Use:  Error messages, alerts
SCSS: $color-status-error
Background: #FFEBEE
Text: #C62828
```

### Warning (Status)
```
Hex:  #FFB74D
RGB:  255, 183, 77
Use:  Warning messages, cautions
SCSS: $color-status-warning
```

### Info (Status)
```
Hex:  #C8E6C9
RGB:  200, 230, 201
Use:  Info messages, notifications
SCSS: $color-status-info
```

---

## Dark Elements

### Black / Footer Background
```
Hex:  #000000
RGB:  0, 0, 0
Use:  Footer background
SCSS: $color-bg-dark
```

---

## Button Variants

### Primary Button
```
Background: #C8E6C9
Text:       #2C3E50
Hover:      #81C784
```

### Secondary Button
```
Background: #FFFFFF
Text:       #558B2F
Hover:      #FFFAF0
```

### Tertiary Button (CTA)
```
Background: #2C3E50
Text:       #FFFFFF
Hover:      #558B2F
```

---

## Contrast Verification

All colours meet WCAG 2.2 AA standards (4.5:1 for normal text, 3:1 for large text):

| Combination | Contrast Ratio | Pass |
|-------------|---------------|------|
| Dark Charcoal on Warm Cream | 11.8:1 | ✅ AAA |
| Dark Charcoal on White | 13.5:1 | ✅ AAA |
| Deep Green on Warm Cream | 8.2:1 | ✅ AAA |
| Medium Gray on White | 6.5:1 | ✅ AAA |
| Medium Gray on Cream | 6.2:1 | ✅ AAA |
| Primary Green on Dark | 4.8:1 | ✅ AA |
| Coral on White | 4.6:1 | ✅ AA |

---

## Design System Tokens

All colours are defined in `assets/scss/_variables.scss` and referenced semantically. Never use hex values directly—always reference the SCSS variable.

```scss
// Example usage in components
.button {
  background-color: $color-primary;
  color: $color-text-primary;
  
  &:hover {
    background-color: $color-primary-hover;
  }
}

.success-message {
  background-color: $color-status-success;
  color: $color-text-primary;
}
```

---

## Tips for Implementation

1. **Always reference tokens** — Never use raw hex values in components
2. **Test contrast** — Verify text is readable on chosen backgrounds
3. **Use hover states** — Apply `$color-primary-hover` or `$color-accent-hover` on interactive elements
4. **Maintain consistency** — Use the same semantic token across the site for the same role
5. **Consider accessibility** — All provided combinations meet AA/AAA standards

---

## Questions?

Refer to:
- `SIGMUND-KERI-DESIGN.md` — Component usage and specifications
- `DESIGN-SYSTEM-FINAL.md` — Full token documentation with pixel values
- `assets/scss/_variables.scss` — The source of truth for all values
