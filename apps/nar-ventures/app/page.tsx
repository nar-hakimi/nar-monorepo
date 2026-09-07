import {
  Eyebrow,
  Button,
  SectionHeader,
  NumberedCard,
  MediaBlock,
  StatementBlock,
  TeaserGrid,
} from "@nar/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Eyebrow>Strategic Growth &amp; Commercial Partnerships</Eyebrow>
        <h1 className={styles.heroHead}>
          We turn market access, relationships, and commercial intelligence
          into <em>executable growth.</em>
        </h1>
        <p className={styles.heroSub}>
          We help brands, operators, manufacturers, and retailers unlock new
          revenue channels and structure partnerships that improve
          commercial performance.
        </p>
        <div className={styles.heroActions}>
          <Button variant="primary" href="/contact">Work With Us</Button>
          <Button variant="secondary" href="/how-we-work">Explore Our Capabilities</Button>
        </div>
      </section>

      <section className={styles.block}>
        <div className={styles.blockInner}>
          <SectionHeader
            eyebrow="Brand Pillars"
            heading="Access. Commercial intelligence. Execution."
          />
          <ol className={styles.pillars}>
            <li>
              <NumberedCard number="01. ACCESS" title="Access">
                Knowing the right operators, counterparties, buyers,
                manufacturers, distributors, and strategic partners.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="02. INTELLIGENCE" title="Commercial Intelligence">
                Understanding market dynamics, pricing, margins, supply,
                demand, and where value can realistically be created.
              </NumberedCard>
            </li>
            <li>
              <NumberedCard number="03. EXECUTION" title="Execution">
                Staying involved beyond strategy or introductions:
                structuring, negotiating, and moving opportunities into
                signed business.
              </NumberedCard>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.block}>
        <div className={`${styles.blockInner} ${styles.capabilities}`}>
          <MediaBlock
            aspectRatio="4/3"
            src="https://res.cloudinary.com/gwyqp12n/image/upload/v1788776531/placeholder--img-home.webp"
            alt="Placeholder image — not final photography"
          />
          <div>
            <SectionHeader
              eyebrow="Capabilities"
              heading={
                <>
                  The recommendation comes with the introduction{" "}
                  <em>attached.</em>
                </>
              }
              lede="We identify where value can be created across the transaction, assess strategic fit, align the economics, and stay actively involved through negotiation and execution."
            />
            <Button variant="secondary" href="/how-we-work">Explore capabilities</Button>
          </div>
        </div>
      </section>

      <StatementBlock
        eyebrow="Where This Shows Up"
        sub="Access isn't a service line. It's the reason the rest of the work is possible."
      >
        Twenty years in rooms most firms <em>never reach.</em>
      </StatementBlock>

      <section className={styles.block}>
        <div className={styles.blockInner}>
          <div className={styles.teaserTop}>
            <SectionHeader eyebrow="Where We Operate" heading="Markets" />
            <a href="/markets" className={styles.viewAll}>View all markets</a>
          </div>
          <TeaserGrid
            columns={3}
            items={[
              { tag: "Market", title: "United States", href: "/markets#us" },
              { tag: "Market", title: "Europe", href: "/markets#europe" },
              { tag: "Market", title: "Emerging & International", href: "/markets#emerging" },
            ]}
          />
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