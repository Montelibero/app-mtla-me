"use client";

import { useGetCurrentC, useTranslations } from "@/shared/lib/hooks";
import { Link, Loader } from "@/shared/ui";
import dynamic from "next/dynamic";

function CurrentC() {
  const translations = useTranslations();
  const { currentC, error, mutate, isLoading, isValidating } = useGetCurrentC();

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{translations.council.content.currentC.title}</h1>
        {(isLoading || isValidating) && (
          <div>{translations.common.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th>{translations.council.content.currentC.firstColumn}</th>
              <th>{translations.council.content.currentC.secondColumn}</th>
            </tr>
          </thead>
          <tbody>
            {currentC?.map((member) => (
              <tr key={member.id}>
                <td>{Link(member.id)}</td>
                <td>{member.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(CurrentC), {
  ssr: false,
  loading: Loader(),
});
