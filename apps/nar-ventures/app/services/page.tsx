import { PageHeader, Eyebrow, TeaserGrid, Button, Reveal } from '@nar/ui';
import styles from './page.module.css';

// Eyebrow below is invented — CONTENT-v3.md doesn't specify one for this
// page. Same status as other invented eyebrows across the site.

const services = [
  {
    tag: '01',
    title: 'Market Entry & Commercial Strategy',
    body: 'The commercial architecture of entering a new state or country. Route to market, partner selection, pricing against live conditions, and the structure to support it.',
  },
  {
    tag: '02',
    title: 'Strategic Partnerships',
    body: 'Identifying, assessing and structuring commercial relationships between operators, manufacturers, distributors and brand owners, including where the parties sit in different jurisdictions.',
  },
  {
    tag: '03',
    title: 'Brand & Manufacturing Partnerships',
    body: 'We place brands with licensed manufacturers in markets they cannot enter directly, and negotiate the production, quality and territorial terms that protect the name once it is out of your control.',
  },
  {
    tag: '04',
    title: 'Wholesale & Supply',
    body: 'Product and materials into multi-state operators and established brands. We move product every week and hold the relationship through pricing cycles rather than deal by deal.',
  },
  {
    tag: '05',
    title: 'Cross-Border Supply',
    body: 'Supply into regulated pharmaceutical channels between countries. Permissions verified on both sides, import and export documentation, and the commercial agreement between the parties.',
  },
  {
    tag: '06',
    title: 'Strategic Transactions',
    body: "Buy-side and sell-side advisory. Target identification, commercial modeling, and diligence on what a target's licenses actually permit, which is frequently narrower than its materials suggest.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Practice"
        heading="Services"
        lede="Most engagements are customized, beginning with an initial conversation to understand your company, market, objective, and commercial challenge."
        fullHeight
      />

      <Reveal as="section" className={`${styles.block} ${styles.intro}`}>
        <div className={styles.blockInner}>
          {/*
            No pricing shown anywhere on this page, and no M&A framing —
            both explicit constraints from PROJECT_CONTEXT.md.
          */}
          <TeaserGrid items={services} columns={3} />
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