import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean; // opens in a new tab when true
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  tagline?: ReactNode; // supports inline <em> emphasis, same pattern as headings
  groups: FooterLinkGroup[];
  copyrightName?: string;
};

export function Footer({
  tagline,
  groups,
  copyrightName = 'NAR Ventures',
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Image
            src="/nar-ventures-logo-light.svg"
            alt="NAR Ventures"
            width={296}
            height={60}
            className={styles.wordmarkImage}
          />
          {tagline && <p className={styles.tagline}>{tagline}</p>}
        </div>

        <nav className={styles.groups} aria-label="Footer">
          {groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <p className={styles.groupTitle}>{group.title}</p>
              <ul className={styles.groupLinks}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {year} {copyrightName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}