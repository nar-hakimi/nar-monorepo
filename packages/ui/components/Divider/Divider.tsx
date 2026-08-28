import styles from './Divider.module.css';

type DividerProps = {
  /** 'line-dot' matches the rule pattern from the style tile (line + red dot). 'hairline' is a plain full-width rule. */
  variant?: 'line-dot' | 'hairline';
  dotPosition?: 'start' | 'end';
  className?: string;
};

export function Divider({ variant = 'hairline', dotPosition = 'end', className }: DividerProps) {
  if (variant === 'hairline') {
    return <hr className={[styles.hairline, className].filter(Boolean).join(' ')} />;
  }

  return (
    <div className={[styles.lineDot, className].filter(Boolean).join(' ')}>
      {dotPosition === 'start' && <span className={styles.dot} aria-hidden="true" />}
      <span className={styles.line} />
      {dotPosition === 'end' && <span className={styles.dot} aria-hidden="true" />}
    </div>
  );
}