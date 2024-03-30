"use client";
import { useGetMembers } from "@/hooks";
import { Link } from "./Link";
import dynamic from "next/dynamic";
import { IMember } from "@/interfaces";
import { Loader } from "./Loader";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon, i18nTabs } from "@/i18n/main-page";

export interface MembersProps {
  delegateId: "delegateA" | "delegateC";
  delegateName: string;
}

const Members: React.FC<MembersProps> = ({ delegateId, delegateName }) => {
  const { locale } = useLanguageContext();
  const { members, isLoading, isValidating, mutate } = useGetMembers();

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
            i18nTabs.assemblyRu.content.members.title :
            i18nTabs.assemblyEn.content.members.title}
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
                  i18nTabs.assemblyRu.content.members.tableHead :
                  i18nTabs.assemblyEn.content.members.tableHead}
              </th>
              <th>MTLAP</th>
              <th>{delegateName}</th>
            </tr>
          </thead>
          <tbody>
            {members
              .filter((member: IMember) => !member.removed && member.count > 0)
              ?.sort((a, b) => b.count - a.count || a.id.localeCompare(b.id))
              ?.map((member, index) => (
                <tr key={member.id}>
                  <td style={{ textAlign: "right", paddingRight: "16px" }}>
                    {index + 1}
                  </td>
                  <td>{Link(member.id)}</td>
                  <td>{member.count}</td>
                  <td>{Link(member?.[delegateId] ?? null)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Members), {
  ssr: false,
  loading: Loader(),
});
