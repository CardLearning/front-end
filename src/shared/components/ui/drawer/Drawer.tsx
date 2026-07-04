'use client'

import {
  cloneElement,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react'

import s from './styles.module.scss'

type DrawerSide = 'left' | 'right'

type DrawerTriggerProps = {
  'aria-controls'?: string
  'aria-expanded'?: boolean
  'aria-haspopup'?: 'dialog'
  onClick?: MouseEventHandler<HTMLElement>
}

type DrawerProps = {
  children: ReactNode
  className?: string
  closeLabel?: string
  defaultOpen?: boolean
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  side?: DrawerSide
  title?: string
  trigger: ReactElement<DrawerTriggerProps>
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Drawer({
  children,
  className,
  closeLabel = 'Close drawer',
  defaultOpen = false,
  isOpen,
  onOpenChange,
  side = 'left',
  title,
  trigger,
}: DrawerProps) {
  const panelId = useId()
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const open = isOpen ?? internalOpen

  const updateOpen = useCallback((nextOpen: boolean) => {
    if (isOpen === undefined) {
      setInternalOpen(nextOpen)
    }

    onOpenChange?.(nextOpen)
  }, [isOpen, onOpenChange])

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        updateOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, updateOpen])

  const enhancedTrigger = cloneElement(trigger, {
    'aria-controls': panelId,
    'aria-expanded': open,
    'aria-haspopup': 'dialog',
    onClick: (event) => {
      trigger.props.onClick?.(event)
      updateOpen(true)
    },
  })

  return (
    <>
      {enhancedTrigger}
      <div
        aria-hidden={!open}
        className={s.root}
        data-open={open}
        data-side={side}
      >
        <button
          aria-label={closeLabel}
          className={s.overlay}
          onClick={() => updateOpen(false)}
          type="button"
        />
        <aside
          aria-modal="true"
          className={cx(s.panel, className)}
          id={panelId}
          role="dialog"
        >
          <div className={s.header}>
            {title ? <div className={s.title}>{title}</div> : null}
            <button
              aria-label={closeLabel}
              className={s.close}
              onClick={() => updateOpen(false)}
              type="button"
            />
          </div>
          {children}
        </aside>
      </div>
    </>
  )
}
