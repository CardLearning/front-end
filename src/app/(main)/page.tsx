import { Card } from '@/shared/components/ui'

import s from './styles.module.scss'

const cards = [
  {
    answer:
      'It spaces recall across time, so the brain has to rebuild the answer instead of simply rereading it.',
    question: 'Why does spaced repetition help learning?',
    tone: 'primary' as const,
  },
  {
    answer:
      'Keep the question short, test one idea, and make the answer easy to verify at a glance.',
    question: 'What makes a good learning card?',
    tone: 'secondary' as const,
  },
  {
    answer:
      'Open the answer only after you try to recall it. That moment of effort is where the useful signal appears.',
    question: 'How should I review a card?',
    tone: 'success' as const,
  },
]

export default function HomePage() {
  return (
    <section className={s.page}>
      <div className={s.heading}>
        <p className={s.kicker}>Today&apos;s deck</p>
        <h1>Home</h1>
      </div>
      <div className={s.cards}>
        {cards.map((card) => (
          <Card
            answer={card.answer}
            key={card.question}
            question={card.question}
            tone={card.tone}
          />
        ))}
      </div>
    </section>
  )
}
