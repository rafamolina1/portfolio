import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Molina | Fullstack Developer",
  description:
    "Desenvolvedor Fullstack focado em construir SaaS modernos e interfaces fluidas.",
  icons: {
    icon: [
      {
        url: "/logo-rafael.svg",
        href: "/logo-rafael.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-rafael.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        {children}
      </body>
    </html>
  );
}
