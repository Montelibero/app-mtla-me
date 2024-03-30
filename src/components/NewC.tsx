"use client";

import { IMember } from "@/interfaces";
import { Link } from "./Link";
import { useGetNewC } from "@/hooks";
import dynamic from "next/dynamic";
import { Loader } from "./Loader";
import { i18nCommon, i18nTabs } from "@/i18n/main-page";
import { useLanguageContext } from "@/hooks/useLanguageContext";

function NewC() {
  const { locale } = useLanguageContext();
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
        <h1>
          {locale === 'ru' ?
            i18nTabs.councilRu.content.newC.title :
            i18nTabs.councilEn.content.newC.title}
        </h1>
        {(isLoading || isValidating) && (
          <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th>
                {locale === 'ru' ?
                  i18nTabs.councilRu.content.newC.firstColumn :
                  i18nTabs.councilEn.content.newC.firstColumn}
              </th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.councilRu.content.newC.secondColumn :
                  i18nTabs.councilEn.content.newC.secondColumn}
              </th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.councilRu.content.newC.thirdColumn :
                  i18nTabs.councilEn.content.newC.thirdColumn}
              </th>
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
