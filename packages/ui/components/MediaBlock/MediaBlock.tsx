import type { ReactNode } from 'react';
import Image from 'next/image';
import styles from './MediaBlock.module.css';

type MediaBlockProps = {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  placeholder?: ReactNode;
  className?: string;
  /** Container background. Defaults to the placeholder's ink fill. */
  background?: string;
};

export function MediaBlock({
  src,
  alt = '',
  aspectRatio = '4/3',
  placeholder,
  className,
  background,
}: MediaBlockProps) {
  return (
    <div
      className={[styles.block, className].filter(Boolean).join(' ')}
      style={{ aspectRatio, ...(background ? { background } : {}) }}
    >
      {src ? (
        <Image src={src} alt={alt} fill className={styles.image} />
      ) : (
        <div className={styles.placeholder}>{placeholder}</div>
      )}
    </div>
  );
}