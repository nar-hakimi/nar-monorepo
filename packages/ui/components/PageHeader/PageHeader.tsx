import type { ReactNode } from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import styles from './PageHeader.module.css';

type PageHeaderProps = {
  eyebrow?: string;
  heading: ReactNode; // supports inline <em> emphasis, same as SectionHeader
  lede?: string;
  className?: string;
};

/**
 * Interior-page variant of the hero — single column, smaller scale than
 * the homepage hero, but same eyebrow + Bodoni heading + lede pattern.
 */
export function PageHeader({ eyebrow, heading, lede, className }: PageHeaderProps) {
  return (
    <header className={[styles.header, className].filter(Boolean).join(' ')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={styles.heading}>{heading}</h1>
      {lede && <p className={styles.lede}>{lede}</p>}
    </header>
  );
}