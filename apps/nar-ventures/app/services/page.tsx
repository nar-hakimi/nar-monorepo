import { PageHeader, Eyebrow, Button } from '@nar/ui';
import styles from './page.module.css';

const services = [
  'Strategic Partnerships & Business Development',
  'Market Entry & Expansion',
  'Commercial Growth Strategy',
  'Partner Identification & Introductions',
  'Sourcing & Procurement Strategy',
  'Wholesale & Supply Strategy',
  'Manufacturing & Processing Partnerships',
  'Distribution & Retail Strategy',
  'Brand Strategy & Product Development',
  'Pricing & Margin Optimization',
  'Deal Structuring & Negotiation',
  'Execution Support',
];

export default function ServicesPage() {
  return (
    <main>
      {/*
        TODO: eyebrow invented — CONTENT.md doesn't specify one for this
        page. Flag for Nar's confirmation, same status as other flagged
        placeholder copy on this site.
      */}
      <PageHeader
        eyebrow="What We Do"
        heading="Services"
        lede="Most engagements are customized, beginning with an initial conversation to understand your company, market, objective, and commercial challenge."
      />

      <section className={`${styles.block} ${styles.intro}`}>
        <div className={styles.blockInner}>
          {/*
            No pricing shown anywhere on this page, and no M&A framing —
            both explicit constraints from PROJECT_CONTEXT.md.
          */}
          <ul className={styles.services}>
            {services.map((service) => (
              <li key={service} className={styles.service}>
                <span className={styles.dot} aria-hidden="true" />
                <p className={styles.serviceText}>{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.block}>
        <div className={`${styles.blockInner} ${styles.closing}`}>
          <Eyebrow align="center">Get Started</Eyebrow>
          <h2 className={styles.closingHead}>
            Let&apos;s talk about what&apos;s <em>next.</em>
          </h2>
          <Button variant="primary" href="/contact">Work With Us</Button>
        </div>
      </section>
    </main>
  );
}