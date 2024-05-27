"use client";

import { Tree } from "@/entities/tree";
import { useGetTree, useTranslations } from "@/shared/lib/hooks";
import { IMember } from "@/shared/lib/interfaces";
import { sumCount } from "@/shared/lib/utils";
import { Loader } from "@/shared/ui";
import dynamic from "next/dynamic";

export interface DelegateTreeProps {
  header: string;
  type: string;
}

const DelegateTree: React.FC<DelegateTreeProps> = ({ header, type }) => {
  const translations = useTranslations();
  const { tree, isLoading, isValidating, mutate, error } = useGetTree(type);
  let i = 1;

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{header}</h1>
        {(isLoading || isValidating) && (
          <div>{translations.common.title}</div>
        )}
        <ul key="tree">
          {tree
            ?.map((member) => ({
              ...(member as IMember),
              delegations: sumCount(
                member as IMember & { children?: IMember[] }
              ),
            }))
            ?.sort(
              (a, b) =>
                b.delegations - a.delegations || a.id.localeCompare(b.id)
            )
            ?.map((member: IMember & { children?: IMember[] }, index) => (
              <div key={member.id}>
                {member.count > 0 ? (
                  <Tree
                    key={member.id}
                    member={member}
                    num={member.councilReady ? i++ : 0}
                  />
                ) : null}
                {index === 19 && type === "delegateC" && <hr />}
              </div>
            ))}
        </ul>
        {error && <div style={{ color: "red" }}>{error()}</div>}
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(DelegateTree), {
  ssr: false,
  loading: Loader(),
});
