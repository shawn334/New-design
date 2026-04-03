# Translia Design System Summary

This document summarizes the design system used for the Translia website redesign, inspired by Concentrix.com. Use this as a reference for maintaining consistency across new pages or sharing with other AI models.

## 1. Visual Identity & Mood
- **Mood**: Global Powerhouse, High-End, Professional, Technical, Dynamic.
- **Key Patterns**: Bento grids, glassmorphism, large-scale typography, smooth motion animations.

## 2. Color Palette
- **Deep Background**: `#020617` (brand-deep)
- **Dark Surface**: `#0F172A` (brand-dark)
- **Primary (Action)**: `#076DB0` (Translia Blue)
- **Secondary (Accent)**: `#0284C7` (Sky Blue)
- **Accent (Highlight)**: `#38BDF8` (Light Blue)
- **Text**: `Slate-300` (Body), `White` (Headings)

## 3. Typography
- **Headings**: `Space Grotesk` (Sans-serif, Bold/Black, Tracking-tighter, Uppercase).
- **Body**: `Inter` (Sans-serif, Medium/Regular).
- **Special**: Use `text-gradient-vibrant` (Primary -> Secondary -> Accent) for emphasis.

## 4. Component Architecture
- **Navbar**: Glassmorphism (`backdrop-blur-xl`), minimal, sticky.
- **Cards**: `glass-card` (White/5 background, White/10 border, hover effects).
- **Buttons**:
  - `btn-primary`: Solid background, shadow, scale on hover.
  - `btn-secondary`: Transparent, border, subtle hover fill.
- **Sections**: Large padding (`py-40`), clear hierarchy, asymmetrical layouts.

## 5. Animation Strategy (using Motion)
- **Entrances**: Subtle `y` offset and `opacity` fade.
- **Hover States**: Scale increases, border color shifts, background glow.
- **Backgrounds**: Animated radial gradients (mesh background) and floating decorative elements.

## 6. Content Guidelines
- **Tone**: Authoritative, visionary, precise.
- **Structure**: Concise headlines, bulleted stats, clear CTAs.
- **Imagery**: High-quality, abstract or tech-focused, consistent seeds for placeholders.
