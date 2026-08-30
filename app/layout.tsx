import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafamolinadev.vercel.app"),
  title: "Rafael Molina — Backend & Full Stack Developer",
  description: "Rafael Molina é desenvolvedor Backend e Full Stack Pleno com experiência internacional em SaaS, logística, APIs, arquitetura e aplicativos publicados.",
  authors: [{ name: "Rafael Oliveira Molina" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Rafael Molina — Backend & Full Stack Developer",
    description: "Software que aguenta o mundo real.",
    type: "website",
    images: [{ url: "/rafael-2026.jpeg", width: 900, height: 1600, alt: "Rafael Molina" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
