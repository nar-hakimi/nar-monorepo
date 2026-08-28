import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from './MediaBlock.module.css';

type MediaBlockProps = {
  src?: string;
  alt?: string;
  /** Fixed aspect ratio, e.g. "4/3", "16/9", "1/1". */
  aspectRatio?: string;
  /** Fallback dark placeholder shown when no src is provided yet. */
  placeholder?: ReactNode;
  className?: string;
};

export function MediaBlock({
  src,
  alt = '',
  aspectRatio = '4/3',
  placeholder,
  className,
}: MediaBlockProps) {
  return (
    <div
      className={[styles.block, className].filter(Boolean).join(' ')}
      style={{ aspectRatio }}
    >
      {src ? (
        <Image src={src} alt={alt} fill className={styles.image} />
      ) : (
        <div className={styles.placeholder}>{placeholder}</div>
      )}
    </div>
  );
}