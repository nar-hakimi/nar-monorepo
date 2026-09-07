import { PageHeader, Eyebrow, TeaserGrid, Button, Reveal } from '@nar/ui';
import type { TeaserItem } from '@nar/ui';
import { MarketsMap } from './MarketsMap';
import styles from './page.module.css';

const regions: TeaserItem[] = [
  {
    tag: 'Market',
    title: 'United States',
    body: 'Our strongest operating network is currently concentrated in New York and New Jersey, with relationships and expansion opportunities extending into additional regulated markets.',
  },
  {
    tag: 'Market',
    title: 'Europe',
    body: "We've developed relationships and explored opportunities across select European markets, including Germany, Switzerland, Hungary, Czech Republic, and Macedonia.",
  },
  {
    tag: 'Market',
    title: 'Emerging & International',
    body: "We're developing opportunities and strategic relationships across select African and other emerging international markets, extending our network as the right opportunities present themselves.",
  },
];

export default function MarketsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Where We Operate"
        heading="U.S., Europe & Select International Markets"
        lede="NAR Ventures operates where the relationships and commercial opportunity are strongest, not everywhere at once."
      />

      <Reveal as="section" className={`${styles.block} ${styles.mapBlock}`}>
        <div className={styles.blockInner}>
          <MarketsMap />
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <TeaserGrid items={regions} columns={3} />
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