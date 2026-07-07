---
name: Clinical Precision Assistant
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424752'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727783'
  outline-variant: '#c2c6d4'
  surface-tint: '#005db6'
  primary: '#00478d'
  on-primary: '#ffffff'
  primary-container: '#005eb8'
  on-primary-container: '#c8daff'
  inverse-primary: '#a9c7ff'
  secondary: '#006970'
  on-secondary: '#ffffff'
  secondary-container: '#7af1fc'
  on-secondary-container: '#006e75'
  tertiary: '#3a4a4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#526262'
  on-tertiary-container: '#cbdddc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468c'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#5dd8e2'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#d4e6e5'
  tertiary-fixed-dim: '#b8cac9'
  on-tertiary-fixed: '#0e1e1e'
  on-tertiary-fixed-variant: '#3a4a49'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  data-display:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is built on the pillars of scientific integrity and user empowerment. It aims to demystify complex peptide calculations by providing a high-clarity, trustworthy environment that feels like a modern clinical laboratory. The personality is professional and authoritative yet remains warm and accessible to eliminate the "spreadsheet fatigue" often found in medical tools.

The visual style is a refined **Corporate/Modern** aesthetic with hints of **Minimalism**. It prioritizes extreme legibility and a logical flow of information. By utilizing generous whitespace and a systematic hierarchy, the design system ensures that critical dosage data is never obscured by visual noise. The emotional response should be one of confidence, precision, and ease of use.

## Colors

This design system uses a palette rooted in "Laboratory White" and "Clinical Gray" to establish a sterile, professional backdrop. 

- **Primary (Medical Blue):** Used for primary actions, active input states, and navigational anchors. It conveys stability and institutional trust.
- **Secondary (Teal):** Used for highlighting successful calculations and emphasizing positive health metrics.
- **Tertiary (Soft Mint):** Used as a background tint for result cards to differentiate "Output" areas from "Input" areas.
- **Neutral:** A range of cool-toned grays used for borders, secondary text, and background layering to prevent visual fatigue.
- **Functional Colors:** High-contrast reds and greens are reserved strictly for error validation and confirmation states to ensure user safety during calculation.

## Typography

The typography system is designed for "At-a-Glance" comprehension. **Manrope** is the primary typeface, chosen for its exceptional readability and neutral character, which makes numerical data highly legible. 

For technical units (e.g., mcg, mg, ml), we introduce **JetBrains Mono** in label roles to provide a subtle "data-centric" feel that distinguishes units from the values themselves. Large `data-display` styles are used for calculation results to ensure the user's primary goal is met with zero ambiguity. Mobile-specific headlines scale down to maintain vertical space while preserving the bold hierarchy.

## Layout & Spacing

The design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The layout philosophy centers on a single-column, multi-step "Wizard" flow to prevent cognitive overload.

- **Desktop:** Content is centered in a 1200px container. Calculations and inputs are grouped into cards that span 8 columns to maintain focus.
- **Spacing Rhythm:** An 8px base unit is used throughout. Vertical rhythm is generous (`lg` or `xl` spacing) between major sections to allow the user's eyes to rest.
- **Mobile:** Margins are reduced to 16px. Cards become full-bleed with soft 8px padding to maximize touch targets for inputs.

## Elevation & Depth

To maintain a clean, clinical feel, the design system avoids heavy shadows. Instead, it uses **Tonal Layers** supplemented by very soft, highly diffused ambient shadows.

- **Level 0 (Background):** Pure white or `#F8F9FA`.
- **Level 1 (Cards):** White background with a 1px border in `#E9ECEF` and a subtle 4px blur shadow at 5% opacity.
- **Level 2 (Active Inputs/Modals):** A more pronounced shadow (12px blur, 8% opacity) to pull the element forward.
- **Focus States:** Rather than deep shadows, focused inputs use a 2px solid primary blue stroke and a light blue outer glow (halo) to signal interactivity.

## Shapes

The shape language is "Approachable Professional." A **Rounded** setting (0.5rem base) is applied to all primary containers and buttons. This softening of corners moves the interface away from "intimidating medical software" toward "personal health assistant." 

- **Inputs & Buttons:** 0.5rem (8px) for a modern, standard feel.
- **Large Result Cards:** 1rem (16px) to frame the output as a distinct, friendly summary.
- **Segmented Controls:** Fully pill-shaped (3rem) to clearly differentiate them from standard text inputs.

## Components

### Buttons
Primary buttons are solid `primary_color_hex` with white text. Secondary buttons use an outline style with a subtle hover fill. Large, clear labels are mandatory.

### Segmented Controls
Used for toggling between units (e.g., mg vs mcg). These feature a \"sliding\" background indicator to show the active state clearly, providing a tactile feel.

### Calculation Cards
Result highlights must be placed in a card with the `tertiary_color_hex` background. The primary value should use the `data-display` typography level.

### Multi-Step Progress
A slim progress bar at the top of the interface indicates the user's journey through the calculation (e.g., Vial Size → Dosage → Reconstitution).

### Inputs
Numeric inputs must have large tap targets. Labels are always positioned above the input in `label-mono` style. Include \"Quick-add\" chips (e.g., +10, +50) next to inputs to assist with common values.

### Visual Cues
Use simple icons (syringes, vials, droplets) sparingly to reinforce the context of each input field without cluttering the UI.
