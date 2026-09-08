import { PageHeader, Eyebrow, Button, Reveal } from '@nar/ui';
import styles from './page.module.css';

const categories = [
  {
    title: 'Market Entry & Strategic Partnerships',
    body: 'Structured commercial and manufacturing relationships supporting established brands entering new regulated markets.',
  },
  {
    title: 'Wholesale & Supply',
    body: 'Managed supply relationships with multi-state operators, manufacturers and established brands across licensed U.S. markets.',
  },
  {
    title: 'Brand & Manufacturing',
    body: 'Connected brands with licensed manufacturing partners and structured commercial terms around production, quality, territory and distribution.',
  },
  {
    title: 'Strategic Transactions',
    body: 'Supported operators and license holders in evaluating acquisitions, divestitures and commercial opportunities.',
  },
  {
    title: 'International Development',
    body: 'Developing supply, manufacturing and distribution relationships between U.S. and European regulated markets.',
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Representative Experience"
        heading="Selected commercial work across regulated markets"
      />

      <Reveal as="section" className={`${styles.block} ${styles.intro}`}>
        <div className={styles.blockInner}>
          <p className={styles.disclaimer}>Client names are withheld by agreement.</p>

          <ul className={styles.entries}>
            {categories.map((category) => (
              <li key={category.title} className={styles.entry}>
                <span className={styles.entryDot} aria-hidden="true" />
                <div>
                  <h3 className={styles.entryTitle}>{category.title}</h3>
                  <p className={styles.entryText}>{category.body}</p>
                </div>
              </li>
            ))}
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