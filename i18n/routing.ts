import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["pt-BR", "en", "it", "es", "fr"],
    defaultLocale: "pt-BR",
});
