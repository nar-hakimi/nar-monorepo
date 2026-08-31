import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './TeaserGrid.module.css';

export type TeaserItem = {
  tag: string;
  title: string;
  href?: string;
};

type TeaserGridProps = {
  items: TeaserItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

export function TeaserGrid({ items, columns = 3, className }: TeaserGridProps) {
  return (
    <div
      className={[styles.grid, className].filter(Boolean).join(' ')}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => {
        const content = (
          <>
            <div className={styles.tag}>{item.tag}</div>
            <h4 className={styles.title}>{item.title}</h4>
          </>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className={styles.card}>
            {content}
          </Link>
        ) : (
          <div key={item.title} className={styles.card}>
            {content}
          </div>
        );
      })}
    </div>
  );
}