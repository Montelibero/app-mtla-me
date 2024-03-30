"use client";

import { useGetCorporateMembers } from "@/hooks";
import { Link } from "./Link";
import dynamic from "next/dynamic";
import { IMember } from "@/interfaces";
import { Loader } from "./Loader";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon, i18nTabs } from "@/i18n/main-page";

export interface CorporateMembersProps { }

const CorporateMembers: React.FC<CorporateMembersProps> = ({ }) => {
  const { locale } = useLanguageContext();
  const { data, members, isLoading, isValidating, mutate } =
    useGetCorporateMembers();

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
            i18nTabs.corporateRu.content.members.title :
            i18nTabs.corporateEn.content.members.title}
        </h1>
        {(isLoading || isValidating) && (
          <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th></th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.corporateRu.content.members.secondColumn :
                  i18nTabs.corporateEn.content.members.secondColumn}
              </th>
              <th>MTLAC</th>
              <th>
                {locale === 'ru' ?
                  i18nTabs.corporateRu.content.members.fourthColumn :
                  i18nTabs.corporateEn.content.members.fourthColumn}
              </th>
              <th>TOML</th>
            </tr>
          </thead>
          <tbody>
            {members
              .filter((member: IMember) => !member.removed)
              ?.sort((a, b) => b.count - a.count || a.id.localeCompare(b.id))
              ?.map((member: IMember, index) => (
                <tr key={member.id} style={{ alignItems: "center" }}>
                  <td style={{ textAlign: "right", paddingRight: "16px" }}>
                    {index + 1}
                  </td>
                  <td>{Link(member.id)}</td>
                  <td>{member.count}</td>
                  <td>
                    {member.domain ? (
                      <a href={`https://${member.domain}`}>{member.domain}</a>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    <div style={{ textAlign: "left" }}>
                      {Object.keys(member.toml?.meta?.DOCUMENTATION ?? {})
                        .filter((key) =>
                          [
                            "ORG_NAME",
                            "ORG_URL",
                            "ORG_OFFICIAL_EMAIL",
                          ].includes(key)
                        )
                        .sort((a, b) => a.localeCompare(b))
                        .map((key, index) => (
                          <div key={index}>
                            {key}: {member.toml?.meta?.DOCUMENTATION[key]}
                            <br />
                          </div>
                        ))}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(CorporateMembers), {
  ssr: false,
  loading: Loader(),
});
