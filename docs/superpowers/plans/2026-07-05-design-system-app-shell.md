# Design System App Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a SINAU-inspired design system, reusable UI primitives, and an adaptive LearningCard app shell with Home, Progress, and Settings pages.

**Architecture:** Global design tokens live in `src/styles` and are imported once through the App Router root layout. Reusable UI primitives live in `src/shared/components/ui`, while the application frame lives in `src/widgets/app-shell` and wraps nested route pages through `src/app/(main)/layout.tsx`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Sass, CSS Modules, FSD.

---

### Task 1: Sass Design System

**Files:**
- Create: `src/styles/global.scss`
- Create: `src/styles/colors.scss`
- Create: `src/styles/typography.scss`
- Create: `src/styles/animation.scss`
- Create: `src/styles/mixins.scss`
- Modify: `src/app/layout.tsx`
- Modify: `next.config.ts`
- Delete: `src/app/globals.css`

- [x] **Step 1: Configure global Sass resources**

Add `sassOptions.additionalData` to `next.config.ts` with:

```ts
additionalData: '@use "src/styles/mixins.scss" as *; @use "src/styles/animation.scss" as *; @use "src/styles/typography.scss" as *;'
```

Expected result: component Sass modules can call mixins from those three files without local `@use`.

- [x] **Step 2: Add design tokens**

Create `src/styles/colors.scss` with light and dark theme CSS variables based on Figma SINAU tokens: primary `#6360ff`, secondary `#ff8181`, success `#7dc579`, warning `#ffc960`, error `#ff6d9f`, light bases, dark bases, and accent colors.

- [x] **Step 3: Add typography mixins**

Create `src/styles/typography.scss` with DM Sans variables and mixins for `text-xs`, `text-sm`, `text-default`, `text-title-1`, `text-title-2`, and `text-title-3`, each supporting regular and bold weights.

- [x] **Step 4: Add shared animation and media mixins**

Create `src/styles/animation.scss` with transition and keyframe helpers for fade, drawer slide, card reveal, and loader rotation. Create `src/styles/mixins.scss` with media query helpers such as `mobile`, `tablet`, `desktop`, and `hover-supported`.

- [x] **Step 5: Replace global CSS import**

Import `../styles/global.scss` from `src/app/layout.tsx` and remove `src/app/globals.css`.

### Task 2: Shared UI Components

**Files:**
- Create: `src/shared/components/ui/button/Button.tsx`
- Create: `src/shared/components/ui/button/styles.module.scss`
- Create: `src/shared/components/ui/button/index.ts`
- Create: `src/shared/components/ui/drawer/Drawer.tsx`
- Create: `src/shared/components/ui/drawer/styles.module.scss`
- Create: `src/shared/components/ui/drawer/index.ts`
- Create: `src/shared/components/ui/card/Card.tsx`
- Create: `src/shared/components/ui/card/styles.module.scss`
- Create: `src/shared/components/ui/card/index.ts`
- Create: `src/shared/components/ui/index.ts`

- [x] **Step 1: Add Button**

Implement a client Button component with variants `primary`, `secondary`, `success`, `ghost`, and `light`, optional `isLoading`, and hover effects guarded by `@include hover-supported`.

- [x] **Step 2: Add Drawer**

Implement a client Drawer component with controlled/uncontrolled open state, `side="left" | "right"`, a trigger passed through props, overlay click close, Escape close, and smooth slide animation.

- [x] **Step 3: Add Card**

Implement a client question card that toggles its answer on click and exposes `aria-expanded`.

### Task 3: App Shell And Routes

**Files:**
- Create: `src/widgets/app-shell/AppShell.tsx`
- Create: `src/widgets/app-shell/styles.module.scss`
- Create: `src/widgets/app-shell/index.ts`
- Create: `src/shared/config/navigation.ts`
- Create: `src/app/(main)/layout.tsx`
- Create: `src/app/(main)/page.tsx`
- Create: `src/app/(main)/progress/page.tsx`
- Create: `src/app/(main)/settings/page.tsx`
- Delete: `src/app/page.tsx`
- Delete: `src/app/page.module.css`

- [x] **Step 1: Add navigation config**

Create three menu items: Home `/`, Progress `/progress`, Settings `/settings`.

- [x] **Step 2: Build AppShell**

Create desktop sidebar styled from the EduEra reference with LearningCard branding, no Support block, and a mobile drawer trigger.

- [x] **Step 3: Add pages**

Home renders an `h1` plus several question cards. Progress and Settings render `h1` with the menu item name.

### Task 4: Verification And Graphify

**Files:**
- Modify: `graphify-out/**`

- [x] **Step 1: Run static checks**

Run `npm run lint` and fix reported errors.

- [x] **Step 2: Run production build**

Run `npm run build` and fix compile errors.

- [x] **Step 3: Browser smoke test**

Start `npm run dev`, verify desktop and mobile render, open the mobile drawer, navigate through Home, Progress, and Settings, and toggle a card answer.

- [x] **Step 4: Refresh Graphify**

Run `graphify update .` after code, documentation, and planning changes.
