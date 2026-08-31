import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  wordmark?: string;
  tagline?: ReactNode; // supports inline <em> emphasis, same pattern as headings
  groups: FooterLinkGroup[];
  copyrightName?: string;
};

export function Footer({
  wordmark = 'NAR VENTURES',
  tagline,
  groups,
  copyrightName = 'NAR Ventures',
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <div className={styles.wordmark}>
            {wordmark}
            <span className={styles.dot}>.</span>
          </div>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
        </div>

        <nav className={styles.groups} aria-label="Footer">
          {groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <p className={styles.groupTitle}>{group.title}</p>
              <ul className={styles.groupLinks}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {year} {copyrightName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}