import { PageHeader, MediaBlock, Eyebrow, StatementBlock, Button, Reveal } from '@nar/ui';
import styles from './page.module.css';

// TODO: Per CONTENT.md — this whole page's copy is a placeholder pending
// headshot selection and final bio approval from Nar. Do not treat this
// as final/publishable without her sign-off (see TASKS.md open questions).

export default function AboutPage() {
  return (
    <main>
      {/*
        TODO: eyebrow invented — CONTENT.md doesn't specify one for this
        page. Flag for Nar's confirmation, same status as other flagged
        placeholder copy on this site.
      */}
      <PageHeader
        eyebrow="Who We Are"
        heading="About"
        lede="NAR Ventures grew organically out of the work of building brands, developing supply relationships, and putting commercial deals together."
      />

      <Reveal as="section" className={`${styles.block} ${styles.storyBlock}`}>
        <div className={styles.blockInner}>
          <div className={styles.story}>
            <p>
              What started as individual introductions (operators looking
              for supply, brands looking for manufacturing and
              distribution, manufacturers looking for volume, retailers
              looking for the right products) evolved into something
              broader.
            </p>
            <p>
              The real value was never simply access to a network. It was
              understanding each side of a transaction well enough to
              identify where an opportunity made commercial sense,
              structure the economics properly, connect the right
              parties, and stay involved until the relationship became
              executable.
            </p>
          </div>
        </div>
      </Reveal>

      {/*
        TODO: eyebrow invented — CONTENT.md doesn't specify one for this
        line, same status as other flagged placeholder copy on this page.
      */}
      <StatementBlock eyebrow="Our Model">
        NAR Ventures formalized that model: relationships backed by
        commercial intelligence and <em>hands-on execution.</em>
      </StatementBlock>

      <Reveal as="section" className={styles.block}>
        <div className={`${styles.blockInner} ${styles.founder}`}>
          <div>
            {/*
              TODO: placeholder — MediaBlock renders as a plain dark box
              until Nar selects a real headshot (see REPO_STRUCTURE.md's
              known gaps and TASKS.md open questions).
            */}
            <MediaBlock aspectRatio="4/5" />
            {/*
              TODO: name/title placeholder — CONTENT.md never states Nar's
              full name or an exact title anywhere in the Founder background
              copy. Using "Nar" alone since that's the only name CONTENT.md
              uses. Flag for her confirmation before treating as final.
            */}
            <p className={styles.founderName}>Nar</p>
          </div>
          <div>
            <Eyebrow>Founder</Eyebrow>
            <p className={styles.founderBody}>
              NAR Ventures is built on an operator-driven background
              rather than a traditional consulting one: direct experience
              across business development, brand building, wholesale
              sales, sourcing, procurement, manufacturing, processing,
              distribution, retail account development, pricing, margin
              strategy, product commercialization, and strategic
              partnerships.
            </p>
            <p className={styles.founderBody}>
              As the founder of NAR New York, Nar has also built and
              commercialized a consumer brand firsthand, from product
              development and manufacturing relationships to
              distribution, buyer outreach, retail placement, and market
              growth.
            </p>
            <p className={styles.founderBody}>
              That operating experience allows for evaluating
              opportunities from multiple sides of the table (brand,
              manufacturer, supplier, distributor, retailer, and end
              market) rather than from a single perspective.
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