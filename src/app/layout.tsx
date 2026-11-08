import type { Metadata } from "next";
import { archivo, ibmPlexMono, interTight } from "./fonts";
import "./globals.css";

const title = "Anton Bohachuk — Full Stack Engineer";
const description =
  "Full Stack Engineer with 4 years building production web apps across frontend and backend — TypeScript on React/Next.js and Angular, NestJS services, and cloud infrastructure on GCP and Cloudflare.";
const image = {
  url: "/images/home/hero.jpg",
  width: 1939,
  height: 2423,
  alt: "Anton Bohachuk",
};

export const metadata: Metadata = {
  // Resolves relative image URLs to absolute ones for og:image / twitter:image.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${interTight.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        {/* Keep scroll-revealed content visible when JS is unavailable. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;translate:none !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
