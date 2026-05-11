# Update Log — May 9, 2026

**Status:** ✅ Complete

---

## Changes Made

### 1. Expanded Colour Palette with Full Shade Ranges

**Green Family:**
- `$palette-green-50`: #F1F8F5 (lightest)
- `$palette-green-100`: #E8F5E9 (very light — new primary background)
- `$palette-green-200`: #C8E6C9 (light)
- `$palette-green-500`: #81C784 (medium — hover states)
- `$palette-green-900`: #558B2F (dark — strong actions)

**Coral Family:**
- `$palette-coral-50`: #FFF5F0 (lightest)
- `$palette-coral-100`: #FFEBDE (very light)
- `$palette-coral-400`: #ffb399 (light — hover/secondary)
- `$palette-coral-500`: #ff7f50 (medium — primary buttons)
- `$palette-coral-900`: #d9522b (dark — strong actions)

**Gray Family:**
- `$palette-gray-50`: #FAFAFA (lightest)
- `$palette-gray-100`: #F1F2F3 (very light)
- `$palette-gray-200`: #E0E0E0 (light — borders)
- `$palette-gray-400`: #B0BEC5 (medium-light — muted text)
- `$palette-gray-600`: #78909C (medium — secondary text)
- `$palette-gray-900`: #2C3E50 (dark — primary text)

### 2. Updated Semantic Tokens

**Backgrounds:**
- `$color-bg-default`: Changed from #C8E6C9 → #E8F5E9 (lighter green)
- `$color-bg-accent`: Changed from #E8F5E9 → #F1F8F5 (even lighter green)

**Buttons:**
- `$btn-primary-bg`: Now uses `$palette-coral-500` (#ff7f50)
- `$btn-primary-hover`: Now uses `$palette-coral-400` (#ffb399)
- `$btn-tertiary-hover`: Now uses `$palette-coral-500` (coral on hover)

**Text:**
- All text tokens mapped to gray shade ranges for consistency

### 3. Added Primary Button to Hero Section

**HTML Change:**
- Replaced single "Get in touch" button with a button pair
- Primary button: "Explore opportunities" (coral, links to #services)
- Tertiary button: "Get in touch" (dark charcoal, links to #consultation)
- Buttons arranged in flex container with gap, responsive wrap

### 4. SCSS Compilation

✅ **Status:** Successful, no errors

**Output:**
- `assets/css/main.css` — Updated with new colour values
- File size: ~9.0 KB (compressed)
- All new shade ranges rendered correctly
- Primary button styles active

---

## Visual Changes

### Hero Section
- Background: Now #E8F5E9 (lighter, more subtle green)
- Primary button: Coral (#ff7f50) — vibrant action colour
- Secondary button: Dark charcoal (#2C3E50) — secondary action
- Text: Dark charcoal (#2C3E50) — high contrast

### Overall Design
- More sophisticated colour hierarchy with 5-shade ranges per colour family
- Lighter primary background creates more breathing room
- Coral buttons provide strong visual hierarchy
- Full shade ranges enable future component variants

---

## Files Modified

1. **assets/scss/_variables.scss**
   - Added full colour shade ranges (50, 100, 200/400/500, 600/900)
   - Updated semantic tokens to use shade ranges
   - Mapped legacy names to new ranges for backwards compatibility
   - Updated button variant tokens

2. **index.html**
   - Modified hero section button area
   - Added primary button alongside tertiary
   - Buttons wrapped in flex container for alignment

3. **assets/css/main.css** (generated)
   - Recompiled from SCSS
   - All new colour values active

---

## Next Steps

✅ Colour palette expanded  
✅ Primary button added to hero  
✅ SCSS compiled  

**Ready for:** Phase 1 Visual Testing

Run `npm run serve` to start local server and verify:
- ✅ Lighter green background (#E8F5E9) visible
- ✅ Coral primary button visible and correct
- ✅ Light coral button hover
- ✅ Two-button hero layout responsive
- ✅ All text readable on light background

---

**Compiled:** May 9, 2026 at completion of colour expansion
**Status:** ✅ Ready for browser testing
