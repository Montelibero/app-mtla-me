'use client';

import { IMember } from "@/shared/lib/interfaces";
import { sumCount } from "@/shared/lib/utils";
import { Link } from "@/shared/ui";
import { FC } from "react";

export const Tree: FC<{
  member: IMember & { children?: IMember[] };
  num?: number;
}> = ({ member, num }) => {
  const sum = sumCount(member);
  return (
    <>
      <li key={member.id}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {num ? `${num}` : num === 0 ? "-" : ""}
          {Link(member.id)}{" "}
          {sum - member.count > 0
            ? sum + " = " + member.count + " + " + (sum - member.count)
            : sum}
        </div>
      </li>
      {!!member.children?.length && (
        <ul key={`${member.id}_children`}>
          {member.children.map((nestedMember) => (
            <Tree key={`${nestedMember.id}_children`} member={nestedMember} />
          ))}
        </ul>
      )}
    </>
  );
};
