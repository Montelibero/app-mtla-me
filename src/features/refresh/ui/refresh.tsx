"use client";

import { useGetChanges, useTranslations } from "@/shared/lib/hooks";
import dynamic from "next/dynamic";

function Refresh() {
  const translations = useTranslations();
  const { changes, isLoading, isValidating, mutate, date } = useGetChanges();
  
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

export default dynamic(() => Promise.resolve(Refresh), {
  ssr: false,
});
