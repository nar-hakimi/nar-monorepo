import type { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  className?: string;
};

/**
 * Renders as a Next.js <Link> when `href` is provided, otherwise a native
 * <button>. Title case, never uppercase — hover always resolves to signal
 * red on both background/border, matching the style tile's component spec.
 */
export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
