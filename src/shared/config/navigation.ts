export type NavigationItem = {
  href: string
  icon: 'home' | 'progress' | 'settings'
  label: 'Home' | 'Progress' | 'Settings'
}

export const navigationItems: NavigationItem[] = [
  {
    href: '/',
    icon: 'home',
    label: 'Home',
  },
  {
    href: '/progress',
    icon: 'progress',
    label: 'Progress',
  },
  {
    href: '/settings',
    icon: 'settings',
    label: 'Settings',
  },
]
