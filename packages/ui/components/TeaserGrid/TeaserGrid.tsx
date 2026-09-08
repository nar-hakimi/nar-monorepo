import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './TeaserGrid.module.css';

export type TeaserItem = {
  tag?: string;
  title: string;
  body?: string;
  href?: string;
};

type TeaserGridProps = {
  items: TeaserItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

export function TeaserGrid({ items, columns = 3, className }: TeaserGridProps) {
  return (
    <ul
      className={[styles.grid, className].filter(Boolean).join(' ')}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => {
        const content = (
          <>
            {item.tag && <div className={styles.tag}>{item.tag}</div>}
            <h4 className={styles.title}>{item.title}</h4>
            {item.body && <p className={styles.body}>{item.body}</p>}
          </>
        );

        return (
          <li key={item.title} className={styles.item}>
            {item.href ? (
              <Link href={item.href} className={styles.card}>
                {content}
              </Link>
            ) : (
              <div className={styles.card}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}