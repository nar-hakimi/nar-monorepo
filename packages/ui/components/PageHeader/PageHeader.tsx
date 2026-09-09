'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import styles from './PageHeader.module.css';

type PageHeaderProps = {
  eyebrow?: string;
  heading: ReactNode;
  lede?: string;
  fullHeight?: boolean;
  className?: string;
};

export function PageHeader({ eyebrow, heading, lede, fullHeight = false, className }: PageHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [showScrollCue, setShowScrollCue] = useState(true);
  const [cueEligible, setCueEligible] = useState(true);

  // Only show the cue when the header actually fits in one viewport —
  // if its content (e.g. a long lede) makes it taller than the screen,
  // the "bottom" of the box lands mid-page rather than at the fold,
  // and a scroll hint no longer makes sense (the user's already scrolling).
  useEffect(() => {
    if (!fullHeight || !headerRef.current) return;

    function checkFits() {
      if (!headerRef.current) return;
      setCueEligible(headerRef.current.getBoundingClientRect().height <= window.innerHeight);
    }

    checkFits();
    window.addEventListener('resize', checkFits);
    return () => window.removeEventListener('resize', checkFits);
  }, [fullHeight]);

  useEffect(() => {
    if (!fullHeight || !headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollCue(entry.isIntersecting),
      { rootMargin: '-15% 0px 0px 0px' }
    );

    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [fullHeight]);

  function scrollToNextSection() {
    const nextSection = headerRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header
      ref={headerRef}
      className={[styles.header, fullHeight && styles.fullHeight, className].filter(Boolean).join(' ')}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={styles.heading}>{heading}</h1>
      {lede && <p className={styles.lede}>{lede}</p>}
      {fullHeight && cueEligible && (
        <button
          type="button"
          onClick={scrollToNextSection}
          className={[styles.scrollCue, !showScrollCue && styles.scrollCueHidden].filter(Boolean).join(' ')}
          aria-label="Scroll to next section"
        >
          <span className={styles.scrollLabel}>Scroll</span>
          <span className={styles.scrollLine} />
        </button>
      )}
    </header>
  );
}