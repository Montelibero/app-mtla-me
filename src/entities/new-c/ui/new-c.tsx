"use client";

import { useGetNewC, useTranslations } from "@/shared/lib/hooks";
import { IMember } from "@/shared/lib/interfaces";
import { Link, Loader } from "@/shared/ui";
import dynamic from "next/dynamic";

function NewC() {
  const translations = useTranslations();
  const { newC, isLoading, isValidating, mutate } = useGetNewC();

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{translations.council.content.newC.title}</h1>
        {(isLoading || isValidating) && (
          <div>{translations.common.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th>{translations.council.content.newC.firstColumn}</th>
              <th>{translations.council.content.newC.secondColumn}</th>
              <th>{translations.council.content.newC.thirdColumn}</th>
            </tr>
          </thead>
          <tbody>
            {newC?.map(
              (
                member: Pick<IMember, "id" | "count" | "weight" | "delegations">
              ) => (
                <tr key={member.id}>
                  <td>{Link(member.id)}</td>
                  <td>
                    {member.delegations ?? 0 > 0
                      ? member.count +
                      " = " +
                      (member.count - (member.delegations ?? 0)) +
                      " + " +
                      member.delegations
                      : member.count}
                  </td>
                  <td>{member.weight}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(NewC), {
  ssr: false,
  loading: Loader(),
});
