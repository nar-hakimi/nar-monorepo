import type { Metadata } from "next";
import "./globals.css";
import "../../../packages/ui/tokens/primitives.css";
import "../styles/tokens.css";
import { Navbar, Footer } from "@nar/ui";

export const metadata: Metadata = {
  title: "NAR Ventures",
  description: "Strategic Growth & Commercial Partnerships",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;1,500&family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar
          links={[
            { label: "Industries", href: "/industries" },
            { label: "Markets", href: "/markets" },
            { label: "Experience", href: "/experience" },
            { label: "How We Work", href: "/how-we-work" },
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Insights", href: "/insights" },
          ]}
          ctaLabel="Contact"
          ctaHref="/contact"
        />
        {children}
        <Footer
          tagline={<>Where access becomes <em> opportunity.</em></>}
          groups={[
            {
              title: 'Explore',
              links: [
                { label: 'Industries', href: '/industries' },
                { label: 'Markets', href: '/markets' },
                { label: 'Experience', href: '/experience' },
                { label: 'How We Work', href: '/how-we-work' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Insights', href: '/insights' },
              ],
            },
            {
              title: 'Connect',
              links: [
                { label: 'Contact', href: '/contact' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
              ],
            },
          ]}
        />
      </body>
    </html>
  );
}