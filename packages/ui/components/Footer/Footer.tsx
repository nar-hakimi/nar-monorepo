import Link from 'next/link';
import styles from './Footer.module.css';

export type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  wordmark?: string;
  links: FooterLink[];
  tagline?: string;
};

export function Footer({
  wordmark = 'NAR VENTURES',
  links,
  tagline = 'BLACK / WHITE / SIGNAL RED',
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wordmark}>
        {wordmark}
        <span className={styles.dot}>.</span>
      </div>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.tagline}>{tagline}</div>
    </footer>
  );
}