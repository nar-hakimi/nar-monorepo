import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

type EyebrowProps = {
  children: ReactNode;
  /** Use 'onDark' inside a StatementBlock or any dark-background section. */
  variant?: 'default' | 'onDark';
  className?: string;
};

/**
 * The recurring mono/tracked/dot-prefixed label used to open almost every
 * section on NAR Ventures — "Brand Pillars", "Capabilities", "Where We
 * Operate", etc. Build once, reuse everywhere rather than hand-assembling
 * the dot + text per page.
 */
export function Eyebrow({ children, variant = 'default', className }: EyebrowProps) {
  const classes = [styles.eyebrow, variant === 'onDark' ? styles.onDark : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <p className={classes}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  );
}
