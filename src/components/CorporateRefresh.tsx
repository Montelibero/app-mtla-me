"use client";

import { useGetCorporateMembers } from "@/hooks";
import { useTranslations } from "@/hooks/useTranslations";
import dynamic from "next/dynamic";

function CorporateRefresh() {
  const translations = useTranslations();
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
        <div>{translations.common.title}</div>
      ) : (
        <>
          {`${translations.common.data} ${date && new Date(date).toLocaleString()}`}
          <button
            onClick={() => {
              localStorage.clear();
              mutate();
            }}
            style={{ width: "320px", height: "32px", margin: "16px" }}
          >
            {translations.common.buttonTitle}
          </button>
        </>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CorporateRefresh), {
  ssr: false,
});
