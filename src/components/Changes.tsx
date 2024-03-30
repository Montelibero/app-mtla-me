"use client";

import { useGetChanges, useGetTransaction } from "@/hooks";
import { IMember } from "@/interfaces";
import { Link } from "./Link";
import dynamic from "next/dynamic";
import { Loader } from "./Loader";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nTabs } from "@/i18n/main-page";

function Changes() {
  const { locale } = useLanguageContext();
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
        <h1>
          {locale === 'ru' ?
            i18nTabs.councilRu.content.changes.title :
            i18nTabs.councilEn.content.changes.title}
        </h1>
        {changes?.length > 0 ? (
          <table cellSpacing="16px">
            <thead>
              <tr>
                <th>
                  {locale === 'ru' ?
                    i18nTabs.councilRu.content.changes.firstColumn :
                    i18nTabs.councilEn.content.changes.firstColumn}
                </th>
                <th>
                  {locale === 'ru' ?
                    i18nTabs.councilRu.content.changes.secondColumn :
                    i18nTabs.councilEn.content.changes.secondColumn}
                </th>
                <th>
                  {locale === 'ru' ?
                    i18nTabs.councilRu.content.changes.thirdColumn :
                    i18nTabs.councilEn.content.changes.thirdColumn}
                </th>
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
            {locale === 'ru' ?
              i18nTabs.councilRu.content.changes.noChanges :
              i18nTabs.councilEn.content.changes.noChanges}
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
