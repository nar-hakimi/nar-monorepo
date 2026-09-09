import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

type EyebrowProps = {
  children: ReactNode;
  variant?: 'default' | 'onDark' | 'subtitle';
  align?: 'left' | 'center';
  className?: string;
};

/**
 * The recurring mono/tracked/dot-prefixed label used to open almost every
 * section on NAR Ventures — "Brand Pillars", "Capabilities", "Where We
 * Operate", etc. Build once, reuse everywhere rather than hand-assembling
 * the dot + text per page.
 *
 * `variant="subtitle"` drops the dot and uses a softer, non-signal color —
 * for a personal title/subtitle sitting under a heading (e.g. "Founder &
 * CEO" under a name), which shouldn't visually compete with the page's
 * actual section-opening eyebrow.
 */
export function Eyebrow({ children, variant = 'default', align = 'left', className }: EyebrowProps) {
  const classes = [
    styles.eyebrow,
    variant === 'onDark' ? styles.onDark : '',
    variant === 'subtitle' ? styles.subtitle : '',
    align === 'center' ? styles.center : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <p className={classes}>
      {variant !== 'subtitle' && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </p>
  );
}