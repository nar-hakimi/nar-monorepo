import type { ReactNode, MouseEventHandler } from 'react';
import styles from './Tag.module.css';

type TagProps = {
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function Tag({ children, active = false, onClick, className }: TagProps) {
  const classes = [styles.tag, active ? styles.active : '', className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick} aria-pressed={active}>
      {children}
    </button>
  );
}