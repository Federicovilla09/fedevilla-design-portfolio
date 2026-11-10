import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/typography.css";
import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "../fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fedevilla-design-portfolio.vercel.app"),
  title: "fedevilla.design · Portfolio",
  description: "Diseñador UX/UI que también desarrolla. Productos digitales, del research al código.",
  openGraph: {
    title: "fedevilla.design · Portfolio",
    description: "Diseñador UX/UI que también desarrolla.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${satoshi.variable} ${plexMono.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
