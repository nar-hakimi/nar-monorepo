'use client';

import { useState } from 'react';
import { PageHeader, Tag, Eyebrow, Button, Reveal } from '@nar/ui';
import styles from './page.module.css';

type Entry = { text: string; category: string };

const categories = [
  'Supply & Sourcing',
  'Manufacturing & Distribution',
  'Market Entry',
  'Retail & Wholesale',
  'Strategic Partnerships',
];

// TODO: category assignments below are our own interpretation — CONTENT.md
// lists these 5 categories as a candidate grouping but never actually maps
// entries to them. Several entries plausibly fit more than one category
// (e.g. entry 3 touches both Market Entry and Manufacturing & Distribution).
// Flag for Nar's review before treating this as final.
const entries: Entry[] = [
  {
    text: 'Structured recurring supply relationships between cultivators, processors, brands, and retail groups.',
    category: 'Supply & Sourcing',
  },
  {
    text: 'Negotiated manufacturing and processing partnerships between brands and licensed operators.',
    category: 'Manufacturing & Distribution',
  },
  {
    text: 'Identified manufacturing, distribution, and retail partners for brands entering new markets.',
    category: 'Market Entry',
  },
  {
    text: 'Connected suppliers with processors and buyers to create new commercial channels.',
    category: 'Supply & Sourcing',
  },
  {
    text: 'Advised operators on wholesale pricing, margins, volume commitments, payment terms, and supply economics.',
    category: 'Retail & Wholesale',
  },
  {
    text: 'Developed retail and wholesale account-growth strategies.',
    category: 'Retail & Wholesale',
  },
  {
    text: 'Helped companies assess product positioning, assortment, commercialization, and market fit.',
    category: 'Market Entry',
  },
  {
    text: 'Supported U.S. and European market-entry, sourcing, manufacturing, and distribution conversations.',
    category: 'Market Entry',
  },
  {
    text: 'Facilitated cross-border strategic partnerships between operators.',
    category: 'Strategic Partnerships',
  },
  {
    text: 'Developed emerging consumer and wellness concepts outside traditional cannabis categories.',
    category: 'Strategic Partnerships',
  },
];

export default function ExperiencePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = selected ? entries.filter((e) => e.category === selected) : entries;

  return (
    <main>
      {/*
        TODO: eyebrow invented — CONTENT.md doesn't specify one for this
        page. Flag for Nar's confirmation, same status as other flagged
        placeholder copy on this site.
      */}
      <PageHeader
        eyebrow="Track Record"
        heading="Representative Experience"
        lede="A sample of the kinds of relationships and outcomes we've helped build. Details are anonymized to protect client and partner confidentiality."
      />

      <Reveal as="section" className={`${styles.block} ${styles.intro}`}>
        <div className={styles.blockInner}>
          <div className={styles.filters} role="group" aria-label="Filter by category">
            <Tag active={selected === null} onClick={() => setSelected(null)}>
              All
            </Tag>
            {categories.map((cat) => (
              <Tag key={cat} active={selected === cat} onClick={() => setSelected(cat)}>
                {cat}
              </Tag>
            ))}
          </div>

          <ul className={styles.entries}>
            {filtered.map((entry) => (
              <li key={entry.text} className={styles.entry}>
                <span className={styles.entryDot} aria-hidden="true" />
                <p className={styles.entryText}>{entry.text}</p>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className={styles.empty}>No entries in this category yet.</li>
            )}
          </ul>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <div className={`${styles.blockInner} ${styles.closing}`}>
          <Eyebrow align="center">Get Started</Eyebrow>
          <h2 className={styles.closingHead}>
            Let&apos;s talk about what&apos;s <em>next.</em>
          </h2>
          <Button variant="primary" href="/contact">Work With Us</Button>
        </div>
      </Reveal>
    </main>
  );
}