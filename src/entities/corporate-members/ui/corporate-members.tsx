"use client";

import { useGetCorporateMembers, useTranslations } from "@/shared/lib/hooks";
import { IMember } from "@/shared/lib/interfaces";
import { Link, Loader } from "@/shared/ui";
import dynamic from "next/dynamic";

export interface CorporateMembersProps { }

const CorporateMembers: React.FC<CorporateMembersProps> = ({ }) => {
  const translations = useTranslations();
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
          {translations.corporate.content.members.title}
        </h1>
        {(isLoading || isValidating) && (
          <div>{translations.common.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th></th>
              <th>{translations.corporate.content.members.secondColumn}</th>
              <th>MTLAC</th>
              <th>{translations.corporate.content.members.fourthColumn}</th>
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
