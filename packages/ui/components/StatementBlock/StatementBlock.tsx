import type { ReactNode } from 'react';
import { Reveal } from '../Reveal/Reveal';
import styles from './StatementBlock.module.css';

type StatementBlockProps = {
  eyebrow?: string;
  /** Pass JSX to use inline <em> for the signal-red italic phrase. */
  children: ReactNode;
  sub?: string;
  className?: string;
};

export function StatementBlock({ eyebrow, children, sub, className }: StatementBlockProps) {
  return (
    <Reveal as="section" className={[styles.statement, className].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        {eyebrow && (
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className={styles.headline}>{children}</h2>
        {sub && <p className={styles.sub}>{sub}</p>}
      </div>
    </Reveal>
  );
}