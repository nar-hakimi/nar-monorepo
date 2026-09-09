import { PageHeader, MediaBlock, Eyebrow, Button, Reveal } from '@nar/ui';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        heading="Nar Hakimi"
      />

      <div className={styles.titleWrap}>
        <Eyebrow variant="subtitle">Founder &amp; CEO</Eyebrow>
      </div>

      <Reveal as="section" className={`${styles.block} ${styles.intro}`}>
        <div className={`${styles.blockInner} ${styles.founder}`}>
          <div>
            <MediaBlock
              src="https://res.cloudinary.com/gwyqp12n/image/upload/v1788919797/nar-headshot.jpg"
              alt="Nar Hakimi, Founder & CEO of NAR Ventures"
              aspectRatio="5/5"
              background="var(--color-paper)"
            />
          </div>
          <div>
            <p className={styles.founderBody}>
              I started in luxury fashion, building wholesale and
              distribution for Dolce &amp; Gabbana, Michael Kors, alice +
              olivia and Ramy Brook. It taught me the least glamorous and
              most decisive part of consumer business. Who controls the
              shelf. What a name is worth once it is on it. How to write
              terms both sides still want to honor a year later.
            </p>
            <p className={styles.founderBody}>
              I later founded NAR New York, my own cannabis brand, and
              entered one of the most fragmented regulated consumer
              markets in the country.
            </p>
            <p className={styles.founderBody}>
              NAR Ventures was built out of that. We advise on market
              entry and strategic partnerships, structure brand and
              manufacturing relationships, supply operators and brands,
              and execute transactions across the United States and
              Europe.
            </p>
            <p className={styles.founderBody}>
              My foundation is in New York and New Jersey. I am currently
              focused on European opportunities, including medical
              supply and distribution in Germany, Switzerland and the
              Czech Republic.
            </p>
          </div>
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