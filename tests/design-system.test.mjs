import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

async function read(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8')
}

test('global Sass resources and design tokens are configured', async () => {
  const nextConfig = await read('next.config.ts')
  const rootLayout = await read('src/app/layout.tsx')
  const globalStyles = await read('src/styles/global.scss')
  const colors = await read('src/styles/colors.scss')
  const typography = await read('src/styles/typography.scss')

  assert.match(nextConfig, /sassOptions/)
  assert.match(nextConfig, /src\/styles\/mixins\.scss/)
  assert.match(nextConfig, /src\/styles\/animation\.scss/)
  assert.match(nextConfig, /src\/styles\/typography\.scss/)
  assert.match(rootLayout, /styles\/global\.scss/)
  assert.match(globalStyles, /DM Sans/)
  assert.match(colors, /--color-primary:\s*#6360ff/i)
  assert.match(colors, /\[data-theme='dark'\]/)
  assert.match(typography, /@mixin text-title-3/)
})

test('shared UI primitives are exported', async () => {
  const sharedUi = await read('src/shared/components/ui/index.ts')
  const button = await read('src/shared/components/ui/button/Button.tsx')
  const drawer = await read('src/shared/components/ui/drawer/Drawer.tsx')
  const card = await read('src/shared/components/ui/card/Card.tsx')

  assert.match(sharedUi, /'use client'/)
  assert.match(sharedUi, /button/)
  assert.match(sharedUi, /drawer/)
  assert.match(sharedUi, /card/)
  assert.match(button, /isLoading/)
  assert.match(drawer, /side/)
  assert.match(drawer, /trigger/)
  assert.match(card, /aria-expanded/)
})

test('app shell routes use the LearningCard navigation', async () => {
  const appShell = await read('src/widgets/app-shell/AppShell.tsx')
  const navigation = await read('src/shared/config/navigation.ts')
  const home = await read('src/app/(main)/page.tsx')
  const progress = await read('src/app/(main)/progress/page.tsx')
  const settings = await read('src/app/(main)/settings/page.tsx')

  assert.match(appShell, /LearningCard/)
  assert.doesNotMatch(appShell, /Support 24\/7/)
  assert.match(navigation, /Home/)
  assert.match(navigation, /Progress/)
  assert.match(navigation, /Settings/)
  assert.match(home, /Card/)
  assert.match(progress, /Progress/)
  assert.match(settings, /Settings/)
})
