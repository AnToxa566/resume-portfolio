import { Archivo, IBM_Plex_Mono, Inter_Tight } from "next/font/google";

// Display / headings — variable font, width axis pulled in so `font-stretch: 112%` works.
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

// Body copy — variable font, no weight list needed.
export const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

// Labels, tags, metrics, meta — not a variable font, so weights are explicit.
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});
