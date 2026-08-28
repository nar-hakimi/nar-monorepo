import type { ReactNode } from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  eyebrow?: string;
  /** Pass JSX so you can wrap the emphasis phrase in <em> for the signal-red italic treatment. */
  heading: ReactNode;
  lede?: string;
  align?: 'left' | 'center';
  className?: string;
};

/**
 * The eyebrow + h2 + optional lede combination that opens nearly every
 * section (Brand Pillars, Capabilities, Markets...). Compose it once here
 * instead of hand-assembling the three pieces per page.
 *
 * For the inline emphasis pattern ("...into <em>executable growth.</em>"),
 * pass heading as JSX: heading={<>Regular text <em>emphasized text.</em></>}
 */
export function SectionHeader({
  eyebrow,
  heading,
  lede,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const classes = [styles.header, align === 'center' ? styles.center : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={styles.heading}>{heading}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </div>
  );
}
