'use client';

import { useState } from 'react';
import { PageHeader, Eyebrow, Tag, Button, Reveal } from '@nar/ui';
import { MarketsMap } from './MarketsMap';
import styles from './page.module.css';

type MarketTab = 'us' | 'europe';

const europeCountries = [
  {
    title: 'Germany',
    body: 'Medical cannabis · import and distribution · manufacturing · brand partnerships',
  },
  {
    title: 'Switzerland',
    body: 'Medical cannabis · emerging adult-use ecosystem · manufacturing · strategic partnerships',
  },
  {
    title: 'Czech Republic',
    body: 'Medical cannabis · manufacturing · import and distribution · strategic partnerships',
  },
  {
    title: 'Broader Europe',
    body: 'Cross-border supply · qualified manufacturing · distribution · market-entry opportunities',
  },
];

export default function MarketsPage() {
  const [activeTab, setActiveTab] = useState<MarketTab>('us');

  return (
    <main>
      <PageHeader
        eyebrow="Where We Operate"
        heading="U.S. & European Markets"
        lede="NAR Ventures operates where the relationships and commercial opportunity are strongest, not everywhere at once."
      />

      <Reveal as="section" className={`${styles.block} ${styles.mapBlock}`}>
        <div className={styles.blockInner}>
          <MarketsMap />
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <div className={styles.tabs} role="tablist" aria-label="Select a market">
            <Tag active={activeTab === 'us'} onClick={() => setActiveTab('us')}>
              United States
            </Tag>
            <Tag active={activeTab === 'europe'} onClick={() => setActiveTab('europe')}>
              Europe
            </Tag>
          </div>

          {activeTab === 'us' && (
            <div className={styles.panel}>
              <h3 className={styles.panelHeading}>United States</h3>
              <p className={styles.panelBody}>
                Our home market and the core of the practice. Wholesale
                supply into multi-state operators and established brands,
                brand and manufacturing partnerships, sales structuring
                for operators moving across state lines, and transactions.
              </p>
              <p className={styles.panelBody}>
                Licensed markets in the United States are consolidating
                and repricing quickly. The operators who hold margin are
                the ones who move product fast, price against current
                conditions rather than last quarter&apos;s, and know
                their counterparties.
              </p>
            </div>
          )}

          {activeTab === 'europe' && (
            <div className={styles.panel}>
              <h3 className={styles.panelHeading}>Europe</h3>
              <p className={styles.panelBody}>
                Our European work focuses on building commercially viable
                routes between markets. We identify supply, manufacturing
                and distribution opportunities, connect the appropriate
                counterparties, and assess the regulatory permissions
                underlying each transaction.
              </p>
              <p className={styles.panelBody}>
                European expansion requires more than finding a buyer.
                Manufacturing authorizations, import pathways,
                distribution permissions and the commercial structure all
                have to align. NAR Ventures works across those layers to
                identify viable routes to market.
              </p>
              <ul className={styles.countryGrid}>
                {europeCountries.map((country) => (
                  <li key={country.title} className={styles.countryCard}>
                    <h4 className={styles.countryTitle}>{country.title}</h4>
                    <p className={styles.countryBody}>{country.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
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