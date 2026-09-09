import { PageHeader, TeaserGrid, Eyebrow, Button, Reveal } from "@nar/ui";
import styles from "./page.module.css";

export default function WhyNarVentures() {
  return (
    <main>
      <PageHeader
        eyebrow="Why NAR Ventures"
        heading={
          <>
            We operate where relationships, regulation and commerce{" "}
            <em>intersect.</em>
          </>
        }
        lede="NAR Ventures combines direct market relationships with current commercial intelligence and transaction execution. We do not simply identify counterparties. We understand what they need, whether the economics align, whether the required permissions exist, and what it will take to move an opportunity forward."
        fullHeight
      />

      <Reveal as="section" className={`${styles.block} ${styles.intro}`}>
        <div className={styles.blockInner}>
          <TeaserGrid
            columns={3}
            items={[
                {
                tag: "Relationships",
                title: "In-Market",
                body: "Active relationships with buyers, operators, manufacturers and brands.",
                },
                {
                tag: "Geography",
                title: "Cross-Market",
                body: "Commercial activity spanning the United States and Europe.",
                },
                {
                tag: "Process",
                title: "Execution-Led",
                body: "From identification and diligence through negotiation and operating agreement.",
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