import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafamolinadev.vercel.app"),
  title: "Rafael Molina — Backend Developer",
  description:
    "Rafael Molina é desenvolvedor Backend Pleno com experiência internacional em SaaS, logística, APIs, arquitetura e sistemas em produção.",
  authors: [{ name: "Rafael Oliveira Molina" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Rafael Molina — Backend Developer",
    description:
      "Engenharia backend, experiência em logística e contribuições ao gVisor e ao Chanfana.",
    type: "website",
    images: [
      {
        url: "/profilepic.jpeg",
        width: 900,
        height: 1600,
        alt: "Rafael Molina",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
