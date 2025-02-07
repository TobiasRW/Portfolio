import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  da: () => import("./da"),
  en: () => import("./en"),
});
