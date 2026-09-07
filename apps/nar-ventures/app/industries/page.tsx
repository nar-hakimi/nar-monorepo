import { PageHeader, Eyebrow, SectionHeader, TeaserGrid, Button, Reveal } from '@nar/ui';
import type { TeaserItem } from '@nar/ui';
import styles from './page.module.css';

const industries: TeaserItem[] = [
  {
    tag: '01',
    title: 'Consumer Brands & Wellness',
    body: 'We work with emerging and established consumer brands, including those moving from concept into commercialization, on product development, positioning, and go-to-market strategy.',
  },
  {
    tag: '02',
    title: 'Manufacturing, Processing & Distribution',
    body: 'We help manufacturers and processors identify customers, volume, and strategic partners, and help brands secure the manufacturing capacity and distribution networks they need to scale.',
  },
  {
    tag: '03',
    title: 'Retail',
    body: 'We advise retail groups on new brand and supply relationships, and help brands build retail account-growth strategies grounded in real wholesale economics.',
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Where We Work"
        heading="Industries & Experience"
        lede="Our operating experience spans regulated and emerging industries, consumer brands, wellness, manufacturing, distribution, and retail. Below is a closer look at where our network runs deepest."
      />

      <Reveal as="section" className={styles.cannabis}>
        <div className={styles.cannabisInner}>
          <Eyebrow>Cannabis</Eyebrow>
          <p className={styles.cannabisLead}>
            Cannabis is a meaningful part of our expertise, and where much of our
            operating network was built.
          </p>
          <p className={styles.cannabisBody}>
            Our experience spans cultivation, manufacturing, processing, wholesale,
            distribution, retail, and brand development. We&apos;ve worked directly
            across sourcing, procurement, pricing, margin strategy, and product
            commercialization within the category, giving us a working knowledge of
            the industry that goes beyond advisory theory.
          </p>
          <p className={styles.cannabisBody}>
            We bring that operating history to every engagement, whether the work is
            inside cannabis or adjacent to it.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.industriesGrid}>
        <div className={styles.industriesGridInner}>
          <SectionHeader
            eyebrow="Additional Areas of Expertise"
            heading="Beyond Cannabis"
          />
          <TeaserGrid items={industries} columns={3} />
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