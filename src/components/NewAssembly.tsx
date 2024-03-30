"use client";
import { IMember } from "@/interfaces";
import { Link } from "./Link";
import { useGetNewAssembly } from "@/hooks";
import dynamic from "next/dynamic";
import { Loader } from "./Loader";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon, i18nTabs } from "@/i18n/main-page";

function NewAssembly() {
  const { locale } = useLanguageContext();
  const { newC, isLoading, isValidating } = useGetNewAssembly();

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
            i18nTabs.assemblyRu.content.newAssembly.title :
            i18nTabs.assemblyEn.content.newAssembly.title}
        </h1>
        {(isLoading || isValidating) && (
          <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th>
                {locale === 'ru' ?
                  i18nTabs.assemblyRu.content.newAssembly.firstColumn :
                  i18nTabs.assemblyEn.content.newAssembly.firstColumn}
              </th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.assemblyRu.content.newAssembly.secondColumn :
                  i18nTabs.assemblyEn.content.newAssembly.secondColumn}
              </th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.assemblyRu.content.newAssembly.thirdColumn :
                  i18nTabs.assemblyEn.content.newAssembly.thirdColumn}
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

export default dynamic(() => Promise.resolve(NewAssembly), {
  ssr: false,
  loading: Loader(),
});
