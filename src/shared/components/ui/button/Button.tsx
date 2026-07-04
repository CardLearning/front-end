'use client'

import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './styles.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'ghost' | 'light'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
  fullWidth?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Button({
  children,
  className,
  disabled,
  fullWidth = false,
  isLoading = false,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      aria-busy={isLoading || undefined}
      className={cx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        isLoading && s.loading,
        className,
      )}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      <span className={s.content}>{children}</span>
      {isLoading ? <span aria-hidden className={s.loader} /> : null}
    </button>
  )
}
