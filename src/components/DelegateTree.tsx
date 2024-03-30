"use client";
import { IMember } from "@/interfaces";
import { Tree } from "./Tree";
import { useGetTree } from "@/hooks";
import { sumCount } from "@/utils";
import dynamic from "next/dynamic";
import { Loader } from "./Loader";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nCommon } from "@/i18n/main-page";

export interface DelegateTreeProps {
  header: string;
  type: string;
}

const DelegateTree: React.FC<DelegateTreeProps> = ({ header, type }) => {
  const { locale } = useLanguageContext();
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
          <div>{locale === 'ru' ? i18nCommon.refreshRu.title : i18nCommon.refreshEn.title}</div>
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
