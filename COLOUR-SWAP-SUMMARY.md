# Colour Swap Summary

**Date:** May 9, 2026  
**Change:** Swapped primary green and coral colours

---

## What Changed

### Before
- **Primary background:** `#FFFFFF` (white)
- **Primary button:** `#C8E6C9` (warm green)
- **Button hover:** `#81C784` (medium green)
- **Accent:** `#FF7F50` (coral) — not used prominently

### After ✅
- **Primary background:** `#C8E6C9` (warm green)
- **Primary button:** `coral` / `#FF7F50` (vibrant coral)
- **Button hover:** `#FFB399` (light coral)
- **Accent:** Warm green now supports buttons

---

## Updated Files

1. **`assets/scss/_variables.scss`**
   - `$color-bg-default`: Changed to `$palette-green-light` (#C8E6C9)
   - `$color-primary`: Changed to `#ff7f50` (coral)
   - `$color-accent`: Changed to `$palette-green-light` (warm green)
   - Button tokens: All updated to coral variants
   - Line 57-67: Coral hex values for buttons

2. **`assets/scss/_components.scss`**
   - `.testimonial` border: Changed to `#ff7f50` (coral accent)

3. **`assets/css/main.css`**
   - ✅ Recompiled successfully
   - Warm green backgrounds rendered
   - Coral buttons active in CSS
   - All other colours correct

---

## Visual Impact

**Homepage now displays:**
- Warm green (`#C8E6C9`) as primary page background
- Vibrant coral (`#FF7F50`) on buttons for visual pop
- Light coral (`#FFB399`) on button hover
- Deep green (`#558B2F`) for strong/tertiary actions
- High contrast text on warm green background

**Result:** More vibrant, energetic look with coral as the primary action colour while maintaining the warm, inviting aesthetic with the green background.

---

## Testing Notes

- CSS keyword `coral` = hex `#ff7f50` (same colour, different representation)
- No visual difference between `coral` and `#ff7f50` in browser
- All colours verified in compiled CSS output
- Ready for Phase 1 visual testing

---

## Next: Phase 1 Testing

Run `npm run serve` and test:
- ✅ Warm green background visible
- ✅ Coral buttons visible and correct colour
- ✅ Button hover to light coral
- ✅ All text readable on warm green background
- ✅ Mobile responsive at 500px

**Status:** ✅ Ready to test
