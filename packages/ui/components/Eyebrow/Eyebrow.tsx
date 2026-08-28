import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

type EyebrowProps = {
  children: ReactNode;
  variant?: 'default' | 'onDark';
  align?: 'left' | 'center';
  className?: string;
};

/**
 * The recurring mono/tracked/dot-prefixed label used to open almost every
 * section on NAR Ventures — "Brand Pillars", "Capabilities", "Where We
 * Operate", etc. Build once, reuse everywhere rather than hand-assembling
 * the dot + text per page.
 */
export function Eyebrow({ children, variant = 'default', align = 'left', className }: EyebrowProps) {
  const classes = [
    styles.eyebrow,
    variant === 'onDark' ? styles.onDark : '',
    align === 'center' ? styles.center : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <p className={classes}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  );
}