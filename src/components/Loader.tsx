"use client";

import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon } from "@/i18n/main-page";

export const Loader = () => {
  const Loader = () => {
    const { locale } = useLanguageContext();

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
      </div>
    )
  };

  return Loader;
};
