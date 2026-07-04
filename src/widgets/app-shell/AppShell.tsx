'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode, useState } from 'react'

import { Button, Drawer } from '@/shared/components/ui'
import { navigationItems } from '@/shared/config/navigation'

import s from './styles.module.scss'

type AppShellProps = {
  children: ReactNode
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

function isActivePath(pathname: string, href: string) {
  const currentPath = normalizePath(pathname)

  if (href === '/') {
    return currentPath === '/'
  }

  return currentPath === href || currentPath.startsWith(`${href}/`)
}

function Brand() {
  return (
    <Link aria-label="LearningCard Home" className={s.brand} href="/">
      <span aria-hidden className={s.logoMark}>
        LC
      </span>
      <span className={s.brandName}>LearningCard</span>
    </Link>
  )
}

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <ul className={s.navList}>
      {navigationItems.map((item) => (
        <li key={item.href}>
          <Link
            className={s.navLink}
            data-active={isActivePath(pathname, item.href)}
            href={item.href}
            onClick={onNavigate}
          >
            <span
              aria-hidden
              className={cx(s.navIcon, s[`${item.icon}Icon`])}
            />
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function AppShell({ children }: AppShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={s.app}>
      <header className={s.mobileHeader}>
        <Brand />
        <Drawer
          className={s.drawerPanel}
          isOpen={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          title="LearningCard"
          trigger={
            <Button aria-label="Open navigation" className={s.menuTrigger} variant="light">
              <span aria-hidden className={s.menuIcon} />
            </Button>
          }
        >
          <nav aria-label="Mobile navigation" className={s.drawerNav}>
            <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
          </nav>
        </Drawer>
      </header>

      <div className={s.shell}>
        <aside className={s.sidebar}>
          <Brand />
          <nav aria-label="Main navigation" className={s.sidebarNav}>
            <NavigationLinks />
          </nav>
        </aside>
        <main className={s.content}>{children}</main>
      </div>
    </div>
  )
}
