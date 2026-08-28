'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';

export type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  wordmark?: string;
  wordmarkHref?: string;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function Navbar({
  wordmark = 'NAR VENTURES',
  wordmarkHref = '/',
  links,
  ctaLabel = 'Contact',
  ctaHref = '/contact',
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while open; Escape closes it.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <Link href={wordmarkHref} className={styles.wordmark}>
        {wordmark}
        <span className={styles.dot}>.</span>
      </Link>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button variant="primary" href={ctaHref} className={styles.cta}>
        {ctaLabel}
      </Button>

      <button
        type="button"
        className={styles.burger}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`${styles.burgerLine} ${styles.burgerLineTop} ${isOpen ? styles.burgerLineOpenTop : ''}`} />
        <span className={`${styles.burgerLine} ${styles.burgerLineMid} ${isOpen ? styles.burgerLineOpenMid : ''}`} />
        <span className={`${styles.burgerLine} ${styles.burgerLineBottom} ${isOpen ? styles.burgerLineOpenBottom : ''}`} />
      </button>

      <div
        id="mobile-nav-drawer"
        className={isOpen ? `${styles.drawer} ${styles.drawerOpen}` : styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <ul className={styles.drawerLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.drawerLink} tabIndex={isOpen ? 0 : -1}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="primary" href={ctaHref} className={styles.drawerCta}>
          {ctaLabel}
        </Button>
      </div>
    </nav>
  );
}