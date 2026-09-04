import { PageHeader, Eyebrow, NumberedCard, StatementBlock, Button } from '@nar/ui';
import styles from './page.module.css';

export default function HowWeWorkPage() {
  return (
    <main>
      {/*
        TODO: CONTENT.md's How We Work section was never normalized to
        the Eyebrow/Heading/Lede field structure (see TASKS.md). Eyebrow
        below is invented — flag for Nar's confirmation, same status as
        the Homepage StatementBlock copy and Contact's eyebrow.
      */}
      <PageHeader
        eyebrow="Our Process"
        heading="How We Work"
        lede="Most strategic advisory firms stop at the recommendation. We don't. NAR Ventures works from an active operator network and stays involved beyond the strategy: through the relationship, the negotiation, and the execution."
      />

      {/*
        TODO: eyebrow below ("Our Philosophy") is invented — CONTENT.md
        doesn't specify one for this line, same status as other flagged
        placeholder copy on this page.
      */}
      <StatementBlock eyebrow="Our Philosophy">
        The recommendation comes with the introduction <em>attached.</em>
      </StatementBlock>

      <section className={styles.block}>
        <div className={styles.blockInner}>
          <ol className={styles.process}>
            <li>
              <NumberedCard number="01. ASSESSMENT" title="Opportunity Assessment">
                Understanding the company, the market, and the commercial
                challenge.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="02. STRATEGY" title="Strategy">
                Defining where value can realistically be created.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="03. PARTNERS" title="Partner Identification">
                Bringing the right counterparties to the table, including
                manufacturers, distributors, retailers, suppliers, buyers,
                or strategic partners.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="04. STRUCTURING" title="Commercial Structuring">
                Aligning the economics so the deal works for every side.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="05. NEGOTIATION" title="Negotiation">
                Staying at the table through the terms.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="06. EXECUTION" title="Execution">
                Carrying the relationship into signed, operating business.
              </NumberedCard>
            </li>
          </ol>
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