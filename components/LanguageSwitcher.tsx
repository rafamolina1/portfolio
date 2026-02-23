"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const LOCALES = [
    { code: "pt-BR", flag: "br", name: "Português" },
    { code: "en", flag: "us", name: "English" },
    { code: "it", flag: "it", name: "Italiano" },
    { code: "es", flag: "es", name: "Español" },
    { code: "fr", flag: "fr", name: "Français" },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    };

    return (
        <div className="flex items-center gap-1 ml-2">
            {LOCALES.map((l) => (
                <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    title={l.name}
                    className={`w-6 h-4 rounded-sm overflow-hidden transition-all cursor-pointer ${locale === l.code
                            ? "opacity-100 scale-110 ring-1 ring-zinc-500"
                            : "opacity-35 hover:opacity-80 hover:scale-105"
                        }`}
                >
                    <img
                        src={`https://flagcdn.com/${l.flag}.svg`}
                        alt={l.name}
                        className="w-full h-full object-cover"
                    />
                </button>
            ))}
        </div>
    );
}
