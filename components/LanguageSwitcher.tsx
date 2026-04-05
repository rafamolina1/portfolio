"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const LOCALES = [
    { code: "pt-BR", short: "PT", name: "Português" },
    { code: "en", short: "EN", name: "English" },
    { code: "it", short: "IT", name: "Italiano" },
    { code: "es", short: "ES", name: "Español" },
    { code: "fr", short: "FR", name: "Français" },
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
        <div className="flex shrink-0 items-center gap-1 ml-2">
            {LOCALES.map((l) => (
                <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    title={l.name}
                    aria-label={l.name}
                    aria-pressed={locale === l.code}
                    className={`flex h-8 min-w-8 items-center justify-center rounded-full border px-2 text-[10px] font-semibold tracking-[0.16em] transition-all cursor-pointer ${locale === l.code
                            ? "border-zinc-500 bg-zinc-100 text-zinc-900"
                            : "opacity-35 hover:opacity-80 hover:scale-105"
                        }`}
                >
                    {l.short}
                </button>
            ))}
        </div>
    );
}
