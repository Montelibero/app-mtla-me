"use client";

import { useGetMembers, useTranslations } from "@/shared/lib/hooks";
import { IMember } from "@/shared/lib/interfaces";
import { Link, Loader } from "@/shared/ui";
import dynamic from "next/dynamic";

export interface MembersProps {
  delegateId: "delegateA" | "delegateC";
  delegateName: string;
}

const Members: React.FC<MembersProps> = ({ delegateId, delegateName }) => {
  const translations = useTranslations();
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
        <h1>{translations.assembly.content.members.title}</h1>
        {(isLoading || isValidating) && (
          <div>{translations.common.title}</div>
        )}
        <table cellSpacing="16px">
          <thead>
            <tr>
              <th></th>
              <th>{translations.assembly.content.members.tableHead}</th>
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
