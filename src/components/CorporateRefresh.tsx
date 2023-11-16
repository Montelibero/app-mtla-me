"use client";

import { useGetCorporateMembers } from "@/hooks";
import dynamic from "next/dynamic";

function CorporateRefresh() {
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
        <div>Загрузка...</div>
      ) : (
        <>
          Данные на {date && new Date(date).toLocaleString()}
          <button
            onClick={() => {
              localStorage.clear();
              mutate();
            }}
            style={{ width: "320px", height: "32px", margin: "16px" }}
          >
            Обновить
          </button>
        </>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CorporateRefresh), {
  ssr: false,
});
