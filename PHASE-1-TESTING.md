# Phase 1: Visual Testing Checklist

**Status:** ✅ SCSS Compiled Successfully  
**Date:** May 9, 2026  
**CSS File:** `assets/css/main.css` (9.0 KB)

---

## ✅ Pre-Testing Verification

- [x] SCSS compiled without errors
- [x] CSS file generated (9.0 KB, includes source map)
- [x] All Direction A colours present in output
- [x] No compilation warnings
- [x] Typography scales applied
- [x] Spacing tokens converted to px values

### Colour Verification

Expected Direction A colours found in compiled CSS:

| Hex | Name | Found |
|-----|------|-------|
| `#C8E6C9` | Soft Warm Green | ✅ |
| `#81C784` | Warm Green Medium | ✅ |
| `#558B2F` | Deep Green | ✅ |
| `#FF7F50` | Vibrant Coral | ⏸️ (not yet in use) |
| `#FFFAF0` | Warm Cream | ✅ |
| `#2C3E50` | Dark Charcoal | ✅ |
| `#78909C` | Medium Gray | ✅ |
| `#B0BEC5` | Light Gray | ✅ |
| `#E0E0E0` | Border Gray | ✅ |
| `#E8F5E9` | Light Sage | ✅ |
| `#D6D9DB` | Form Input BG | ✅ |
| `#C62828` | Error Red | ✅ |
| `#FFEBEE` | Error BG | ✅ |

---

## 🧪 Testing Instructions

### Setup
1. Open terminal in project root
2. Run `npm run serve` to start local server (port 3000)
3. Open `http://localhost:3000` in browser
4. DevTools: F12 or Right-click → Inspect

### Browser Testing
- **Chrome/Edge:** Primary testing
- **Firefox:** Cross-browser verification
- **Safari:** Desktop verification
- **Mobile Safari:** iOS testing
- **Chrome Mobile:** Android testing

### Device Testing
- **Desktop:** 1440px+ (full width)
- **Tablet:** 768px (reference, no formal breakpoint)
- **Mobile:** 375px–500px (primary breakpoint)
- **Large Mobile:** 500px–600px (edge case)

---

## 📋 Visual Testing Checklist

### 1. Colour Accuracy

**Task:** Verify Direction A palette matches specification

**Checklist:**
- [ ] Primary green (`#C8E6C9`) appears warm and soft
- [ ] Primary green hover (`#81C784`) is noticeably darker but still warm
- [ ] Deep green (`#558B2F`) works as strong action colour
- [ ] Warm cream (`#FFFAF0`) is subtle background, not pure white
- [ ] Dark charcoal (`#2C3E50`) is readable primary text
- [ ] All text is dark on light backgrounds (high contrast)

**Where to check:**
- **Hero section:** Title, paragraph, button
- **Property types:** Circle backgrounds, labels
- **Service cards:** Image placeholders, text
- **Buttons:** All three variants (primary, secondary, tertiary)
- **Form inputs:** Background, borders, focus state
- **Footer:** Background, text colour

### 2. Typography Hierarchy

**Task:** Verify heading weights and sizes scale correctly

**Checklist:**
- [ ] H1 is bold (700) and prominent (2.5rem/40px)
- [ ] H2 is semibold (600) and visibly smaller than H1
- [ ] H3–H6 are medium weight (500) and scale proportionally
- [ ] Body text is regular (400), readable size
- [ ] Body text on desktop is larger (1.25rem/20px)
- [ ] Small text (labels, captions) is proportionally smaller (0.875rem/14px)
- [ ] All text uses system fonts (no custom fonts)
- [ ] Line heights are consistent (headings: 1.1, body: 1.6)

**Where to check:**
- **Hero:** H1 "Your dream home..." should be bold and large
- **Property types:** "A style suited to you" (H2)
- **Section titles:** "Buy", "Rent", "Invest" (H2)
- **Property type labels:** "Studios", "Flats" (small, 0.875rem)
- **Card titles:** "3 bed detached terrace" (h3, smaller than H2)

### 3. Spacing & Layout

**Task:** Verify 8-point spacing scale and responsive design

**Desktop (1440px+):**
- [ ] Section padding is generous (6rem/96px top/bottom)
- [ ] Container has balanced padding (1.5rem/24px sides)
- [ ] Property type circles have space between them (3.5rem/56px gap)
- [ ] Service cards are horizontal scroll (not stacked)
- [ ] "How We Work" is 2-column layout (image left, text right)
- [ ] Testimonial grid shows multiple cards in one row
- [ ] Featured homes grid is multi-column

**Mobile (375px–500px):**
- [ ] Section padding is reduced (3.5rem/56px top/bottom)
- [ ] Container has tighter padding (1rem/16px sides)
- [ ] Hero aligns content to left (not centered)
- [ ] Hero title scales down (1.75rem/28px)
- [ ] Service cards stack vertically (full width)
- [ ] "How We Work" stacks image → text
- [ ] Testimonial grid is single column
- [ ] Featured homes grid is single column
- [ ] Navigation stays fixed at top

**Responsive Breakpoint (500px):**
- [ ] Layouts shift at 500px (tablet/mobile threshold)
- [ ] No layout broken between 375px–500px
- [ ] No layout broken at 500px–1440px
- [ ] Resize browser smoothly; no sudden breaks

**Where to check:**
- **Hero section:** Top padding should change at 500px
- **Property types:** Gap between circles should be consistent
- **Service cards:** Should scroll horizontally on desktop, stack on mobile
- **Sections:** Padding changes at 500px breakpoint
- **Grids:** Column count changes responsively

### 4. Button States

**Task:** Verify button variants and interactive states

**Primary Button** (`#C8E6C9` background, dark text):
- [ ] Default state visible and reads as button
- [ ] Hover: Background changes to medium green (`#81C784`)
- [ ] Focus: Visual focus outline appears
- [ ] Disabled: Opacity reduced, cursor shows "not-allowed"

**Secondary Button** (white background, green text):
- [ ] Default state visible
- [ ] Hover: Background changes to warm cream (`#FFFAF0`)
- [ ] Focus: Visible outline

**Tertiary Button** (dark background, white text):
- [ ] Default state visible and high-contrast
- [ ] Hover: Background changes to deep green (`#558B2F`)
- [ ] Focus: Visible outline

**Where to check:**
- **Hero:** "Get in touch" button (tertiary)
- **Service cards:** "Contact us ›" links (text-link, no button)
- **Contact form:** "Send Message" button (tertiary)

### 5. Form Elements

**Task:** Verify form inputs and messaging

**Input Fields:**
- [ ] Background colour is light gray (`#D6D9DB`)
- [ ] Border is subtle (1px `#E0E0E0`)
- [ ] Focus border changes to deep green (`#558B2F`)
- [ ] Placeholder text is medium gray
- [ ] Cursor visible in input
- [ ] Padding is consistent (0.875rem inside)

**Form Group Spacing:**
- [ ] Gap between label and input
- [ ] Gap between form fields
- [ ] Consistent padding in form wrapper

**Success Message:**
- [ ] Background is light sage (`#E8F5E9`)
- [ ] Text colour is deep green (`#558B2F`)
- [ ] Visible and readable

**Error Message:**
- [ ] Background is light red (`#FFEBEE`)
- [ ] Text colour is dark red (`#C62828`)
- [ ] Visible and readable

**Where to check:**
- **Contact form:** All input types (text, email, tel, textarea)
- **Form validation:** Test success/error message display

### 6. Navigation & Header

**Task:** Verify fixed header and menu toggle

- [ ] Header stays fixed at top while scrolling
- [ ] Logo is visible and correctly styled (1.25rem, weight 600)
- [ ] Menu toggle icon (hamburger) is centered vertically
- [ ] Background is white with slight blur/transparency
- [ ] Bottom border is subtle (1px, ~0.05 opacity black)
- [ ] Responsive: Toggle only shows on mobile (not needed on desktop)

**Where to check:**
- **Top of page:** Scroll down; header should stay fixed
- **Logo:** "SigmundKeri" text in top-left
- **Mobile:** Hamburger icon in top-right

### 7. Footer

**Task:** Verify footer styling

- [ ] Background is dark charcoal (`#2C3E50`)
- [ ] Logo is white and prominent
- [ ] Copyright text is medium gray (secondary text colour)
- [ ] Padding is generous (4rem/64px on desktop, 3rem on mobile)
- [ ] Text is readable on dark background

**Where to check:**
- **Bottom of page:** Scroll to footer
- **Mobile:** Footer padding reduced at 500px

### 8. Links & Hover States

**Task:** Verify text links and interactive elements

**Hero Link** (`hero__link`):
- [ ] Underline visible (1px border-bottom)
- [ ] Hover: Text colour changes to deep green
- [ ] Hover: Underline colour also changes

**Text Link** (`.text-link`):
- [ ] Default colour is primary text
- [ ] Hover: Colour changes to deep green

**Where to check:**
- **Hero:** "Get in touch ›" link (if it's a link, not button)
- **Service cards:** "Contact us ›" (should be text-link)

### 9. Contrast & Readability

**Task:** Verify all text is readable (WCAG AA compliance)

**Check these combinations:**
- [ ] Dark charcoal on white: High contrast ✅
- [ ] Dark charcoal on warm cream: High contrast ✅
- [ ] Medium gray on white: Readable (AA) ✅
- [ ] Medium gray on cream: Readable (AA) ✅
- [ ] Deep green on dark background: Readable ✅
- [ ] White on dark background: High contrast ✅

**Tools:**
- Chrome DevTools → Lighthouse → Accessibility report
- Browser extension: Contrast Checker, axe DevTools

### 10. Keyboard Navigation & Focus States

**Task:** Verify keyboard accessibility

**Actions:**
- [ ] Tab through all interactive elements (buttons, links, inputs)
- [ ] Focus state is visible on every interactive element
- [ ] Tab order makes sense (left-to-right, top-to-bottom)
- [ ] Can submit form using keyboard only
- [ ] No focus traps (can always escape with Escape or Tab)

**Where to test:**
- **Hero button:** Tab to it, press Enter → should navigate or open modal
- **Links:** Tab to any link, press Enter → should navigate
- **Form:** Tab through inputs, press Submit with Enter

---

## 🔧 Common Issues & Fixes

### Issue: Colours look different than specification
**Check:**
1. Monitor brightness/colour settings
2. Browser colour management (DevTools → More Tools → Rendering → Emulate CSS media feature prefers-color-scheme)
3. Compare hex values in DevTools (inspect element, check `background-color`)
4. Check if CSS file was recompiled (run `npm run build` again)

### Issue: Text is blurry or pixelated
**Check:**
1. Browser zoom (should be 100%)
2. System font rendering (system-ui should use OS native fonts)
3. Font smoothing: `-webkit-font-smoothing: antialiased` may be needed in body

### Issue: Mobile layout not stacking
**Check:**
1. Browser DevTools responsive mode (set to mobile size, ~375px)
2. Breakpoint is 500px; mobile should be max-width 500px
3. CSS file was recompiled (compiled CSS should have `@media(max-width: 500px)`)

### Issue: Buttons don't change colour on hover
**Check:**
1. Hover state is defined in CSS (check DevTools)
2. Transition time is 0.2s (very fast, easy to miss)
3. Try holding mouse over button for 0.5+ seconds
4. Check if browser has disabled hover (some mobile browsers)

---

## 📸 Screenshot Checklist

Take screenshots of these views for documentation:

**Desktop (1440px):**
- [ ] Full page (all sections)
- [ ] Hero section (colours, typography)
- [ ] Property types section
- [ ] Service cards (Buy/Rent/Invest) horizontal scroll
- [ ] Contact form
- [ ] Footer

**Mobile (375px):**
- [ ] Hero section
- [ ] Property types (responsive)
- [ ] Service cards (stacked vertically)
- [ ] Contact form
- [ ] Navigation toggle

**Hover/Focus states:**
- [ ] Primary button hover
- [ ] Secondary button hover
- [ ] Tertiary button hover
- [ ] Form input focus
- [ ] Link hover

---

## ✅ Sign-Off

When all items are complete, you're ready for **Phase 2: Component Implementation**.

**Signed off by:** [Your Name]  
**Date:** [Date]  
**Notes:** [Any issues found, fixes applied]

---

## Next Phase

Once Phase 1 testing is complete:
1. Document any visual issues found
2. Note any contrast or accessibility concerns
3. Verify mobile breakpoint works correctly
4. Then proceed to Phase 2 (Component Implementation)
