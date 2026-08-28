import type { ReactNode } from 'react';
import styles from './NumberedCard.module.css';

type NumberedCardProps = {
  number: string; // "01", "02" — pass pre-formatted so callers control padding/labels
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Used for Brand Pillars (Access / Commercial Intelligence / Execution)
 * and How We Work's process steps — same visual shape, different content.
 * Render a row/grid of these yourself; this component is just one card.
 */
export function NumberedCard({ number, title, children, className }: NumberedCardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.number}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{children}</p>
    </div>
  );
}