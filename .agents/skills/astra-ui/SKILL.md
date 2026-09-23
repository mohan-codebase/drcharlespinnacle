---
name: astra-ui
description: >-
  Use this skill when the user asks to build, modify, or extend UI components in the "GPT Astra" or "Pinnacle" style. It provides the design system rules, CSS patterns, and component structures used in the project.
---

# Astra / Pinnacle UI Style Guide

This skill defines the UI patterns, design system, and coding conventions for building components in the "GPT Astra" or "Pinnacle" style. 

## 1. Styling Paradigm

*   **Semantic CSS over Utility Classes**: Do not use utility classes (like Tailwind) for main layout or components. Instead, write semantic, custom class names (e.g., `.hero`, `.hero-content`, `.philosophy-card`) and define them in `src/app/globals.css`.
*   **CSS Variables**: Use the predefined CSS variables for colors to maintain consistency:
    *   `--background` (main background)
    *   `--foreground` (text)
    *   `--sage` (primary accent color)
    *   `--terracotta` (secondary accent)
    *   `--muted` (secondary text)
    *   `--surface` (cards, image backgrounds)
    *   `--border` (dividers)

## 2. Typography & Text Hierarchy

*   **Headings**: Use `h2` for main section titles. Wrap key words in `<em>` to apply the accent color (sage) and serif font.
*   **Eyebrow**: Use the `.eyebrow` class for small, uppercase overlines above headings. They often include a section number in sage (e.g., `<p className="eyebrow"><span className="section-number">01 /</span> THE PINNACLE PERSPECTIVE</p>`).
*   **Body Text**: Use `.body-copy` for readable paragraphs with high line-height and subdued text color.

## 3. Reusable UI Elements

*   **Buttons**: 
    *   Primary: `<button className="button">Text <Icon size={16} /></button>` (Pill-shaped, sage background, icon on hover).
    *   Outline: Use `.button.button-outline`.
*   **Text Links**: Use `.text-link` for inline calls to action with an arrow icon.
*   **Icons**: Use `lucide-react`. Ensure icons have a thin stroke width (`strokeWidth={1}` or `1.2`) for an elegant, minimal look.

## 4. Layout & Spacing

*   **Containers**: Wrap main content in `.container` (centers and max-widths content).
*   **Sections**: Use semantic `<section>` tags. Apply `.section-padding` for consistent vertical spacing between sections.

## 5. Scroll Animations

*   **Section Reveal**: Most sections should animate in on scroll using the `useSectionReveal` hook.
    ```tsx
    import { useSectionReveal } from "@/hooks/useSectionReveal";
    
    export function MySection() {
      const ref = useSectionReveal();
      return (
        <section ref={ref} className="section-reveal section-padding container">
          {/* content */}
        </section>
      );
    }
    ```

When building new UI components, adhere strictly to these patterns to maintain the sleek, modern aesthetic of the project.
