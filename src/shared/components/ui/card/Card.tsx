'use client'

import type { ReactNode } from 'react'
import { useId, useState } from 'react'

import s from './styles.module.scss'

type CardTone = 'primary' | 'secondary' | 'success' | 'warning'

type CardProps = {
  answer: ReactNode
  className?: string
  defaultOpen?: boolean
  question: ReactNode
  tone?: CardTone
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Card({
  answer,
  className,
  defaultOpen = false,
  question,
  tone = 'primary',
}: CardProps) {
  const answerId = useId()
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <article className={cx(s.card, s[tone], className)}>
      <button
        aria-controls={answerId}
        aria-expanded={isOpen}
        className={s.question}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span>{question}</span>
        <span aria-hidden className={s.indicator} />
      </button>
      {isOpen ? (
        <div className={s.answer} id={answerId}>
          {answer}
        </div>
      ) : null}
    </article>
  )
}
