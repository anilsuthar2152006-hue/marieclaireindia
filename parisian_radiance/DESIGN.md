---
name: Parisian Radiance
colors:
  surface: '#fdf8f6'
  surface-dim: '#ded9d7'
  surface-bright: '#fdf8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f0'
  surface-container: '#f2edeb'
  surface-container-high: '#ece7e5'
  surface-container-highest: '#e6e1df'
  on-surface: '#1c1b1a'
  on-surface-variant: '#4d4635'
  inverse-surface: '#32302f'
  inverse-on-surface: '#f5f0ed'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#675d53'
  on-secondary: '#ffffff'
  secondary-container: '#efe0d4'
  on-secondary-container: '#6d6259'
  tertiary: '#8c4b55'
  on-tertiary: '#ffffff'
  tertiary-container: '#ee9da8'
  on-tertiary-container: '#6e323d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#efe0d4'
  secondary-fixed-dim: '#d2c4b9'
  on-secondary-fixed: '#211a13'
  on-secondary-fixed-variant: '#4e453c'
  tertiary-fixed: '#ffd9dd'
  tertiary-fixed-dim: '#ffb2bc'
  on-tertiary-fixed: '#3a0915'
  on-tertiary-fixed-variant: '#70343e'
  background: '#fdf8f6'
  on-background: '#1c1b1a'
  surface-variant: '#e6e1df'
  cream-bg: '#FCF9F6'
  champagne: '#F1E4D1'
  nude-tan: '#E3CBB8'
  pure-white: '#FFFFFF'
  soft-gold: '#E5C185'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style
The design system embodies the essence of a high-end Parisian beauty brand—sophisticated, feminine, and effortlessly elegant. It is tailored for a discerning clientele seeking premium salon services in India. 

The visual style is **Minimalist Luxury**, characterized by expansive white space, a warm and inviting palette, and a focus on high-quality editorial typography. The interface should feel like a premium lifestyle magazine: airy, composed, and serene. Subtle gold accents and soft transitions evoke a sense of "quiet luxury" rather than overt opulence, ensuring the user experience feels as pampering as the salon services themselves.

## Colors
The palette is rooted in warm neutrals to create a soothing, "skin-tone" friendly environment.

- **Primary (Champagne Gold):** Used sparingly for interactive elements, highlights, and icons. It represents the premium quality of the brand.
- **Secondary (Warm Beige/Cream):** The foundation of the UI. Used for section backgrounds and surface layers to avoid the starkness of pure white.
- **Tertiary (Rose Gold/Warm Brown):** Used for subtle accents, soft borders, or secondary call-to-actions to add depth and a feminine touch.
- **Neutral (Rich Black):** Specifically reserved for typography and high-contrast iconography to ensure legibility and a grounded, professional feel.
- **Backgrounds:** Favor `cream-bg` over `pure-white` for large surfaces to maintain the "warm luxury" aesthetic.

## Typography
The typography strategy relies on the contrast between a graceful, high-contrast Serif and a clean, modern Sans Serif.

- **Headlines:** Use Playfair Display for all major headings. It provides the "editorial" look essential for luxury branding. It should be set with slightly tighter letter-spacing for large displays.
- **Body Text:** Use DM Sans for all long-form content and UI labels. It offers exceptional legibility and a neutral, professional tone that doesn't compete with the headlines.
- **Labels & CTAs:** Navigation items and buttons should use the `label-lg` style—uppercase with generous letter-spacing—to evoke the branding found on luxury product packaging.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a controlled, gallery-like feel, while transitioning to a fluid model on mobile.

- **Generous White Space:** Use large vertical gaps (`section-gap-desktop`) to allow content to breathe. Avoid crowding elements; luxury is defined by the space you don't fill.
- **Grid:** A 12-column system is used for desktop (1280px max-width). Elements should often be centered or offset to create a sophisticated, asymmetrical rhythm.
- **Mobile:** Margins are reduced to 20px, and section gaps are tightened, but the focus on vertical breathing room remains.

## Elevation & Depth
This design system avoids heavy shadows, instead using **Tonal Layers** and **Ambient Glows** to create depth.

- **Tonal Layering:** Use slight variations in background color (e.g., a `cream-bg` section followed by a `champagne` section) to define hierarchy.
- **Soft Ambient Shadows:** For floating elements like cards or modals, use extremely soft, diffused shadows with a low opacity (4–8%) tinted with a hint of warm brown rather than pure grey.
- **Interactive Depth:** On hover, buttons or cards should not "lift" aggressively. Instead, use a subtle color shift to gold or a very fine 1px gold outer glow to signify interactivity.

## Shapes
The shape language is "Softly Rounded," avoiding the clinical feel of sharp corners while maintaining the structure of high-end design.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Containment:** Cards and image containers use the `rounded-lg` (1rem) or `rounded-xl` (1.5rem) setting to feel more organic and welcoming.
- **Circular Elements:** Use full-pill shapes for tags or specific "Book Now" floating action buttons to create a distinctive focal point.

## Components
- **Buttons:** Primary buttons should be solid `neutral-color` (Rich Black) with `pure-white` text for maximum authority. The hover state should transition the background to `primary-color` (Gold). Secondary buttons are outlined in 1px gold or champagne.
- **Input Fields:** Minimalist design with only a bottom border (1px) in `nude-tan`. The label should float above in `label-md` style when the field is active.
- **Cards:** Used for service listings. These should have no borders, using a `white` background against a `cream-bg` page, with a very soft ambient shadow.
- **Chips/Tags:** Used for categories (e.g., "Hair," "Skin"). Small, pill-shaped, with a `champagne` background and `neutral` text.
- **Icons:** Use thin-stroke (1px) line icons. Accents within the icons (like a small sparkle or dot) should be rendered in Gold.
- **Specialty Component (Service Menu):** A list-based component where service names are in Playfair Display on the left, and prices are on the right, connected by a very faint, dotted gold line.