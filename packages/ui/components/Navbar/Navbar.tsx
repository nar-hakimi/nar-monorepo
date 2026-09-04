'use client';

import { useEffect, useState, useRef } from 'react';
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
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
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

  // Hide on scroll down, show on scroll up. Never hide while the
  // mobile drawer is open, and ignore the very top of the page so
  // the nav doesn't flicker on tiny scroll jitters.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (isOpen) return;

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 80) {
        setIsHidden(false);
      } else if (delta > 4) {
        setIsHidden(true);
      } else if (delta < -4) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  return (
    <>
      <nav className={isHidden ? `${styles.nav} ${styles.navHidden}` : styles.nav}>
        <div className={styles.navInner}>
          <Link href={wordmarkHref} className={styles.wordmark}>
            {wordmark}
            <span className={styles.dot}>.</span>
          </Link>

          <ul className={styles.links}>
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
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
        </div>
      </nav>

      <div
        className={isOpen ? `${styles.backdrop} ${styles.backdropOpen}` : styles.backdrop}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav-drawer"
        className={isOpen ? `${styles.drawer} ${styles.drawerOpen}` : styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <ul className={styles.drawerLinks}>
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? `${styles.drawerLink} ${styles.drawerLinkActive}` : styles.drawerLink}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button variant="primary" href={ctaHref} className={styles.drawerCta}>
          {ctaLabel}
        </Button>
      </div>
    </>
  );
}