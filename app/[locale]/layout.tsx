import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });
export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("title"),
        description: t("description"),
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
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as "pt-BR" | "en" | "it" | "es" | "fr")) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="scroll-smooth">
            <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
