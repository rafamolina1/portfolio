import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafamolinadev.vercel.app"),
  title: "Rafael Oliveira Molina | Desenvolvedor Backend Pleno",
  description:
    "Desenvolvedor Backend e Full Stack Pleno com PHP, Laravel, Node.js, TypeScript, APIs REST, microsserviços e SaaS multi-tenant.",
  authors: [{ name: "Rafael Molina" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Rafael Oliveira Molina | Desenvolvedor Backend Pleno",
    description:
      "Backend Pleno com PHP/Laravel, Node.js/TypeScript, PostgreSQL, Redis, Docker, testes e observabilidade.",
    type: "website",
    images: [
      {
        url: "/profilepic.jpeg",
        width: 800,
        height: 800,
        alt: "Rafael Oliveira Molina, Desenvolvedor Backend Pleno",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f7f2",
  colorScheme: "light",
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
