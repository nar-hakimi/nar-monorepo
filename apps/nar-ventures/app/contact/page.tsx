'use client';

import { useState } from 'react';
// import Script from 'next/script'; // uncomment when Calendly is turned back on
import { PageHeader, FormField, Button, Reveal } from '@nar/ui';
import styles from './page.module.css';

// --- Calendly (currently disabled — Nar isn't using a booking mechanism
// yet). Everything below is left in place so it can be switched back on
// without rebuilding it from scratch. To re-enable:
//   1. Uncomment the Script import above
//   2. Uncomment CALENDLY_URL, the Window.Calendly type, and openCalendly
//   3. Uncomment the <link>/<Script> tags and the Calendly <aside> in the
//      JSX below
//   4. Switch styles.blockInner back to `${styles.blockInner} ${styles.layout}`
//      and restore the .layout/.calendlyCard rules in page.module.css
//      (see the commented-out block at the bottom of that file)
//
// IMPORTANT — Button.tsx bug to know about: Button only forwards onClick
// on its native <button> branch. If `href` is passed, it renders a
// Next.js <Link> instead and onClick is silently dropped. The commented
// Calendly button below uses href="#" purely to get the secondary-variant
// styling — don't rely on that; either drop href and accept the default
// variant, or confirm Button forwards onClick for the href branch too
// before wiring this back up, or the popup click will silently do nothing.

// const CALENDLY_URL = 'https://calendly.com/nar-ventures/intro-call';

// declare global {
//   interface Window {
//     Calendly?: {
//       initPopupWidget: (options: { url: string }) => void;
//     };
//   }
// }

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    // Captured synchronously, before the await below — React can null
    // out or recycle e.currentTarget on a SyntheticEvent once an async
    // gap has passed, so reaching back into `e` after `await fetch(...)`
    // is unreliable. This was causing form.reset() to throw silently,
    // which the catch block turned into a false "error" state even on
    // a successful submission.
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  // function openCalendly(e: React.MouseEvent) {
  //   e.preventDefault();
  //   window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  // }

  return (
    <main>
      {/* <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      /> */}

      {/*
        TODO: CONTENT.md doesn't specify an eyebrow for Contact's intro
        (every other PageHeader page has one). Using a placeholder — flag
        for Nar's confirmation, same as the Homepage StatementBlock copy.
      */}
      <PageHeader
        eyebrow="Get In Touch"
        heading="Work With Us"
        lede="Tell us about your company, your market, and what you're looking to accomplish. Most engagements begin with a conversation."
      />

      <Reveal as="section" className={`${styles.block} ${styles.intro}`}>
        <div className={styles.blockInner}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/*
              Honeypot — hidden from real users (off-screen, not
              display:none — some bots specifically skip display:none
              fields to avoid detection). A bot that fills every field
              blindly will fill this one; a real person never sees it.
              Checked server-side in route.ts.
            */}
            <input
              type="text"
              name="website"
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className={styles.row}>
              <FormField label="Name" name="name" type="text" required />
              <FormField label="Company" name="company" type="text" />
            </div>
            <div className={styles.row}>
              <FormField label="Title" name="title" type="text" />
              <FormField label="Email" name="email" type="email" required />
            </div>
            <div className={styles.row}>
              <FormField label="Industry" name="industry" type="text" />
              <FormField label="Market / Region" name="market" type="text" />
            </div>
            <FormField
              label="What are you looking to accomplish?"
              name="goal"
              as="textarea"
              required
            />
            <Button type="submit" variant="primary">
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>
            {status === 'sent' && (
              <p className={styles.statusMessage}>
                Thanks — we&apos;ll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.statusMessageError}>
                Something went wrong. Please try again, or email us directly.
              </p>
            )}
          </form>

          {/* <aside className={styles.calendlyCard}>
            <p className={styles.calendlyLabel}>Prefer to talk directly?</p>
            <p className={styles.calendlyBody}>
              Book a call directly on our calendar and skip the form.
            </p>
            <Button variant="secondary" href="#" onClick={openCalendly}>
              Book a Call via Calendly
            </Button>
          </aside> */}
        </div>
      </Reveal>
    </main>
  );
}