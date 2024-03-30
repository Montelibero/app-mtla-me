"use client";

import { useGetCurrentC } from "@/hooks";
import { Link } from "./Link";
import dynamic from "next/dynamic";
import { Loader } from "./Loader";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon, i18nTabs } from "@/i18n/main-page";

function CurrentC() {
  const { locale } = useLanguageContext();
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
        <h1>
          {locale === 'ru' ?
            i18nTabs.councilRu.content.currentC.title :
            i18nTabs.councilEn.content.currentC.title}
        </h1>
        {(isLoading || isValidating) && (
          <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th>
                {locale === 'ru' ?
                  i18nTabs.councilRu.content.currentC.firstColumn :
                  i18nTabs.councilEn.content.currentC.firstColumn}
              </th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.councilRu.content.currentC.secondColumn :
                  i18nTabs.councilEn.content.currentC.secondColumn}
              </th>
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
