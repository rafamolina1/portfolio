import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafamolinadev.vercel.app"),
  title: "Rafael Molina — Software Engineer",
  description:
    "Rafael Molina é engenheiro de software e contribuidor open source. Conheça suas contribuições, experiência profissional e certificações.",
  authors: [{ name: "Rafael Oliveira Molina" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Rafael Molina — Software Engineer",
    description:
      "Engenharia de software, contribuições open source e experiência profissional de Rafael Molina.",
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
