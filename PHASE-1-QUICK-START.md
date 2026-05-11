# Phase 1: Quick Start Guide

## 🚀 Start Your Local Server

```bash
cd /Users/oshiolumhetse/Projects/momade/sigmundkeri-website
npm run serve
```

**Expected output:**
```
Starting live-server: http://127.0.0.1:3000
```

**Then:**
1. Open browser to `http://localhost:3000`
2. You should see the SigmundKeri website with Direction A colours

---

## 🎨 What to Look For

### Immediate Visual Check (1 minute)

When you open the page:
- ✅ Warm green buttons visible (#C8E6C9)
- ✅ Dark charcoal text readable (#2C3E50)
- ✅ Warm cream background subtle but present (#FFFAF0 on alt sections)
- ✅ No broken layout or missing styles
- ✅ Fixed navigation at top

### Quick Colour Verification

Open DevTools (F12) and inspect these elements:
- **Button (green):** Should have `background-color: #c8e6c9`
- **Body text:** Should have `color: #2c3e50`
- **Section background (alt):** Should have `background-color: #fffaf0`

### Typography Spot Check

- H1 "Your dream home..." should be **bold** and large
- H2 "A style suited to you" should be **semibold**
- Paragraph text should be regular weight and readable

### Mobile Test

1. Open DevTools (F12)
2. Click responsive design mode (Ctrl+Shift+M / Cmd+Shift+M)
3. Select **iPhone SE** (375px)
4. Scroll down and verify:
   - Service cards stack vertically
   - Hero title is smaller
   - Section padding reduced
   - Layout doesn't break

---

## 📋 Detailed Testing

Use the comprehensive checklist in `PHASE-1-TESTING.md` for:
- 10 detailed testing categories
- Specific elements to check
- Expected values
- Common issues & fixes

---

## 🐛 Found a Problem?

1. **Note it down** with:
   - What element (button, form, section name)
   - What's wrong (colour, size, spacing, missing)
   - Screenshot if possible

2. **Check the fix:**
   - Colour not matching? Check hex in DevTools
   - Spacing wrong? Check if SCSS was recompiled
   - Mobile not responsive? Check breakpoint at 500px

3. **Recompile if needed:**
   ```bash
   npm run build
   # Refresh browser (Ctrl+R or Cmd+R)
   ```

---

## ✅ Sign-Off

When you've completed the `PHASE-1-TESTING.md` checklist:
- [ ] All colours match Direction A palette
- [ ] Typography hierarchy is clear
- [ ] Spacing is consistent (8-point scale)
- [ ] Buttons work (hover, focus, all variants)
- [ ] Forms look correct
- [ ] Responsive design works at 500px breakpoint
- [ ] Keyboard navigation works
- [ ] Contrast is good (readable)

**Then you're ready for Phase 2!** 🎉

---

## Need Help?

- **Colour reference:** `COLOUR-PALETTE-REFERENCE.md`
- **Design specs:** `SIGMUND-KERI-DESIGN.md`
- **Token values:** `assets/scss/_variables.scss`
- **SCSS output:** `assets/css/main.css`

Good luck! 🚀
