import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafamolinadev.vercel.app"),
  title: "Rafael Molina | Full Stack Command Center",
  description:
    "Portfolio V2 de Rafael Molina: sistemas full stack, produtos web e mobile, APIs, integrações e Autonomus semifinalista no Rocket da Globo.",
  authors: [{ name: "Rafael Molina" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Rafael Molina | Full Stack Command Center",
    description:
      "Desenvolvedor Full Stack focado em produtos web e mobile, APIs e integrações. Cofundador da Autonomus, semifinalista no Rocket da Globo.",
    type: "website",
    images: [
      {
        url: "/dashboard-filled.png",
        width: 1200,
        height: 630,
        alt: "Sistema full stack desenvolvido por Rafael Molina",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071011",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
