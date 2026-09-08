import {
  Eyebrow,
  Button,
  SectionHeader,
  NumberedCard,
  StatementBlock,
  TeaserGrid,
  Reveal,
} from "@nar/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Eyebrow>Commercial Advisory &amp; Transactions · Regulated Markets</Eyebrow>
        <h1 className={styles.heroHead}>
          We find and structure the opportunities that sit{" "}
          <em>between markets.</em>
        </h1>
        <p className={styles.heroSub}>
          NAR Ventures is a commercial advisory and transaction platform
          working across regulated industries in the United States, Europe
          and select international markets. Market entry, strategic
          partnerships, supply, manufacturing and transactions.
        </p>
        <div className={styles.heroActions}>
          <Button variant="primary" href="/contact">Work With Us</Button>
          <Button variant="secondary" href="#how-we-work">How We Work</Button>
        </div>
      </section>

      <Reveal as="section" id="how-we-work" className={styles.block}>
        <div className={styles.blockInner}>
          <SectionHeader
            eyebrow="How We Work"
            heading="Market access. Commercial intelligence. Execution."
          />
          <ol className={styles.pillars}>
            <li>
              <NumberedCard number="01. MARKET ACCESS" title="Market Access">
                Access. Direct, active relationships with operators,
                manufacturers, distributors, buyers and brand owners across
                the markets we work in. Not a contact list. People we
                transact with.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="02. COMMERCIAL INTELLIGENCE" title="Commercial Intelligence">
                Commercial Intelligence. What a market is actually paying
                this month. Where margin sits and who is capturing it.
                Which operators are long, which are short, and which
                permissions exist to move product between them. This is
                the difference between an opportunity that looks good and
                one that clears.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="03. EXECUTION" title="Execution">
                Execution. We stay involved past the introduction.
                Structuring, negotiation, and remaining in the transaction
                until there is an operating agreement rather than an
                interest.
              </NumberedCard>
            </li>
          </ol>
        </div>
      </Reveal>

      {/*
        ASSUMPTION — StatementBlock has never taken a link/CTA before.
        `link` prop shape below is a guess. Paste StatementBlock.tsx so
        I can confirm the real prop name (or add support for one) before
        this ships.
      */}
      <StatementBlock
        eyebrow="NAR Verified"
        sub="Companies describe themselves in the language of what they intend to do. Regulators record what they are permitted to do. We establish the second before we make the first call."
        link={{ label: "How verification works →", href: "/nar-verified" }}
      >
        Every opportunity we bring forward is commercially assessed and
        independently verified before introduction.
      </StatementBlock>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <div className={styles.teaserTop}>
            <SectionHeader eyebrow="Where We Operate" heading="Markets" />
            <a href="/markets" className={styles.viewAll}>View all markets</a>
          </div>
          {/*
            ASSUMPTION — TeaserGrid previously only rendered tag+title
            (no description). New copy gives each market a full sentence.
            Paste TeaserGrid.tsx to confirm it supports `description`,
            or these lines get dropped silently.
          */}
          <TeaserGrid
            columns={3}
            items={[
              {
                tag: "Established",
                title: "United States",
                body: "Wholesale supply, brand and manufacturing partnerships, sales structuring and transactions across licensed markets.",
                href: "/markets",
              },
              {
                tag: "Expanding",
                title: "Europe",
                body: "Germany, Switzerland and the Czech Republic. Medical supply, manufacturing, import and distribution.",
                href: "/markets",
              },
              {
                tag: "Prospective",
                title: "Select International",
                body: "Emerging regulated markets under active evaluation.",
                href: "/markets",
              },
            ]}
          />
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