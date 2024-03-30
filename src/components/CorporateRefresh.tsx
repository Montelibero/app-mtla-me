"use client";

import { useGetCorporateMembers } from "@/hooks";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon } from "@/i18n/main-page";
import dynamic from "next/dynamic";

function CorporateRefresh() {
  const { locale } = useLanguageContext();
  const { isLoading, isValidating, mutate, date } = useGetCorporateMembers();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoading || isValidating ? (
        <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
      ) : (
        <>
          {`${locale === 'ru' ? i18nCommon.refreshRu.data : i18nCommon.refreshEn.data}
          ${date && new Date(date).toLocaleString()}`}
          <button
            onClick={() => {
              localStorage.clear();
              mutate();
            }}
            style={{ width: "320px", height: "32px", margin: "16px" }}
          >
            {locale === 'ru' ? i18nCommon.refreshRu.buttonTitle : i18nCommon.refreshEn.buttonTitle}
          </button>
        </>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CorporateRefresh), {
  ssr: false,
});
