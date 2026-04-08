# Corex Gym Website Design Brainstorm

## Design Approach Selected: **Cinematic Athletic Minimalism**

### Design Movement
**Cinematic Athletic Minimalism** — Inspired by high-end sports cinematography, luxury athletic branding (Nike, Lululemon), and dark mode premium interfaces. The aesthetic combines bold, dramatic visuals with restrained typography and strategic use of red accents against deep blacks.

### Core Principles
1. **Dark Dominance with Red Intensity**: Black background (#0a0a0a) as the foundation, with strategic crimson/red (#dc2626 or #ef4444) for CTAs, highlights, and energy elements. This creates a high-contrast, premium athletic feel.
2. **Cinematic Depth**: Layered shadows, subtle gradients, and strategic use of blur effects to create visual hierarchy and depth—mimicking film production aesthetics.
3. **Bold, Confident Typography**: Large, heavy display fonts (e.g., Bebas Neue, Oswald) for headlines to convey strength and power. Paired with clean, modern sans-serif (e.g., Inter, Poppins) for body text.
4. **Strategic Whitespace & Asymmetry**: Avoid centered layouts; use asymmetric grids, offset sections, and generous padding to create a premium, breathing feel.

### Color Philosophy
- **Primary**: Deep Black (#0a0a0a) — authority, premium feel, fitness intensity
- **Accent**: Crimson Red (#dc2626) — energy, power, urgency (CTAs, highlights, borders)
- **Secondary**: Charcoal Gray (#1f2937) — subtle depth, card backgrounds
- **Tertiary**: White (#ffffff) — text, contrast, clarity
- **Emotional Intent**: Convey power, exclusivity, and high-energy athleticism. Red creates urgency for WhatsApp CTA and membership offers.

### Layout Paradigm
- **Hero Section**: Full-width dark background with centered, glowing logo (subtle red glow). Logo sits above bold headline with asymmetric text alignment.
- **Facility Showcase**: Staggered grid layout (not uniform). Alternate left/right text and image placement to create visual rhythm.
- **Sections**: Use diagonal dividers or asymmetric spacing between sections. Avoid standard rectangular blocks.
- **CTA Placement**: Red buttons with hover animations, positioned strategically (not always centered).

### Signature Elements
1. **Red Accent Line**: Thin horizontal or diagonal red lines separating sections, creating visual continuity.
2. **Glowing Logo**: Subtle red/white glow effect around the Corex logo in hero, reinforcing brand presence.
3. **Cinematic Cards**: Facility cards with dark backgrounds, subtle shadows, and red left borders (not full borders).

### Interaction Philosophy
- **Hover Effects**: Buttons and cards scale slightly (1.05x) with smooth transitions. Red accents intensify on hover.
- **Scroll Animations**: Subtle fade-in and slide effects as sections enter viewport. Not overly animated—premium and controlled.
- **WhatsApp CTA**: Persistent, floating, or sticky positioning with pulsing red glow to draw attention without being intrusive.

### Animation
- **Entrance Animations**: Fade-in + slight upward slide (100-200ms) for sections as they scroll into view.
- **Button Hover**: Scale (1.05x) + shadow intensification + red color shift (if not already red).
- **Logo Glow**: Subtle pulsing effect (opacity 0.8 → 1.0) on load to draw initial attention.
- **Scroll Parallax**: Subtle parallax on hero background for depth (not excessive).

### Typography System
- **Display Font**: Bebas Neue or Oswald (bold, all-caps for headlines) — conveys strength and power
- **Heading Font**: Poppins Bold (600-700 weight) — modern, confident
- **Body Font**: Inter or Poppins Regular (400 weight) — clean, readable
- **Hierarchy**: 
  - H1: 48-64px, Bebas Neue, all-caps, white
  - H2: 32-40px, Poppins Bold, white
  - H3: 24-28px, Poppins SemiBold, white or red
  - Body: 16px, Inter Regular, light gray (#e5e7eb)
  - Small: 14px, Inter Regular, gray (#9ca3af)

---

## Alternative Ideas (Not Selected)

### Response 1: Luxury Minimalist (Probability: 0.08)
**Design Movement**: Swiss Design meets luxury fitness (think Equinox branding)
- Monochromatic black/white with gold accents instead of red
- Extreme whitespace, geometric precision, serif fonts
- Probability: 0.08 (too minimal for "high-energy" requirement)

### Response 2: Neon Cyberpunk (Probability: 0.07)
**Design Movement**: Cyberpunk aesthetics with neon gradients
- Neon pink/cyan gradients, glitch effects, retro-futuristic fonts
- Heavy animation, bold geometric shapes
- Probability: 0.07 (too trendy, may not age well; conflicts with premium positioning)

---

## Design Decisions Locked In
✅ **Dark theme** (black background) — premium, athletic, modern  
✅ **Red accents** — energy, CTAs, urgency  
✅ **Bold display font** (Bebas Neue or Oswald) — strength  
✅ **Asymmetric layouts** — premium, breathing feel  
✅ **Cinematic depth** (shadows, gradients, blur) — luxury feel  
✅ **Glowing logo** — brand reinforcement  
✅ **Smooth, controlled animations** — premium interaction  

---

## Implementation Checklist
- [ ] Set up CSS variables for dark theme in `index.css`
- [ ] Import Bebas Neue and Poppins from Google Fonts
- [ ] Create hero section with glowing logo
- [ ] Build facility showcase with asymmetric layout
- [ ] Design red accent elements (lines, borders, buttons)
- [ ] Implement WhatsApp CTA (sticky/floating)
- [ ] Add scroll animations and parallax
- [ ] Integrate Google Maps embed
- [ ] Optimize for mobile (responsive typography, touch-friendly CTAs)
- [ ] Test contrast and readability across sections
