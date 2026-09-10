import { PageHeader, Reveal, Eyebrow, Button, StatementBlock } from "@nar/ui";
import styles from "./page.module.css";

export default function NarVerified() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Standard"
        heading={
          <>
            Commercially assessed. Independently verified. Then{" "}
            <em>introduced.</em>
          </>
        }
        lede="Most opportunities in regulated markets are presented on the strength of what a company intends to do. Regulators record something narrower: what it is permitted to do, under which authorization, at which site, until when."
        fullHeight
      />

      <StatementBlock eyebrow="Our Standard">
        NAR Verified is the standard we apply before an opportunity
        reaches a client. It is included in every engagement.
      </StatementBlock>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <h3 className={styles.subhead}>The commercial assessment comes first.</h3>
          <p className={styles.body}>
            Whether the economics work, where margin sits, what the
            counterparty actually needs, and whether the transaction can be
            executed in the form proposed. A perfectly licensed counterparty
            in a deal that does not clear is still not an opportunity.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <h3 className={styles.subhead}>The commercial assessment comes first.</h3>
          <p className={styles.body}>
            Whether the economics work, where margin sits, what the
            counterparty actually needs, and whether the transaction can be
            executed in the form proposed. A perfectly licensed counterparty
            in a deal that does not clear is still not an opportunity.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <h3 className={styles.subhead}>Then the permissions.</h3>
          <ul className={styles.permissions}>
            <li>
              <span className={styles.marker} aria-hidden="true" />
              <p>
                <strong>Which legal entity holds the license.</strong> Groups
                are structured across multiple companies. The one on the
                website is often not the one on the license.
              </p>
            </li>
            <li>
              <span className={styles.marker} aria-hidden="true" />
              <p>
                <strong>What the license authorizes.</strong> Cultivation,
                manufacture, wholesale and distribution are separate
                permissions. Holding one does not imply the others.
              </p>
            </li>
            <li>
              <span className={styles.marker} aria-hidden="true" />
              <p>
                <strong>Which activities, at which site, until when.</strong>{" "}
                Authorizations are specific and they expire.
              </p>
            </li>
          </ul>
          <p className={styles.body}>
            Every answer carries its source and the date it was checked.
            Where a position cannot be established, we report it as unclear
            rather than resolving it in the client&apos;s favor.
          </p>
          <p className={styles.sources}>
            Sources include state regulators in the United States, and in
            Europe Swissmedic, EudraGMDP, SÚKL, BfArM and the relevant
            commercial registers.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.block}>
        <div className={styles.blockInner}>
          <h3 className={styles.subhead}>Why this matters commercially</h3>
          <p className={styles.body}>
            Not because permissions are difficult to look up. Our clients
            have lawyers and compliance teams who can read a register. It
            matters because a transaction assembled around the wrong
            assumption fails late, after time, money and reputation have
            gone into it. Establishing the position at the start is cheaper
            than discovering it at the term sheet.
          </p>
        </div>
      </Reveal>

      {/*
        Case note — intentionally omitted. The copy doc's "Case note"
        section is a bracketed placeholder instruction to be written
        after the September review, not draft content ("[Placeholder.
        To be inserted... Structure: what was presented, what the
        records showed, what changed. No names.]"). Add a real section
        here once that content exists — don't render the bracket text
        itself, it'd read as a bug, not a placeholder.
      */}

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