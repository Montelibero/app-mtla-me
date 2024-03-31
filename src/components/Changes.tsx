"use client";

import { useGetChanges, useGetTransaction } from "@/hooks";
import { IMember } from "@/interfaces";
import { Link } from "./Link";
import dynamic from "next/dynamic";
import { Loader } from "./Loader";
import { useTranslations } from "@/hooks/useTranslations";

function Changes() {
  const translations = useTranslations();
  const { changes } = useGetChanges();
  const xdr = useGetTransaction();

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{translations.council.content.changes.title}</h1>
        {changes?.length > 0 ? (
          <table cellSpacing="16px">
            <thead>
              <tr>
                <th>{translations.council.content.changes.firstColumn}</th>
                <th>{translations.council.content.changes.secondColumn}</th>
                <th>{translations.council.content.changes.thirdColumn}</th>
              </tr>
            </thead>
            <tbody>
              {changes?.map(
                (member: Pick<IMember, "id" | "weight"> & { diff: string }) => (
                  <tr key={member.id}>
                    <td>{Link(member.id)}</td>
                    <td>{member.weight}</td>
                    <td>{member.diff}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <>
            {translations.council.content.changes.noChanges}
          </>
        )}
        {xdr && (
          <p style={{ width: "600px", wordWrap: "break-word" }}>
            {xdr.toXDR().toString("base64")}
          </p>
        )}
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(Changes), {
  ssr: false,
  loading: Loader(),
});
