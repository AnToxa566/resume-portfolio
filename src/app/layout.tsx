import type { Metadata } from "next";
import { archivo, ibmPlexMono, interTight } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton Bohachuk — Full Stack Engineer",
  description:
    "Full Stack Engineer with 3 years building production web apps across frontend and backend — TypeScript on React/Next.js and Angular, NestJS services, and cloud infrastructure on GCP and Cloudflare.",
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
