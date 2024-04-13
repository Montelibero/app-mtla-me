"use client";
import useActiveTab from "@/shared/lib/hooks/use-active-tab";
import Link from "next/link";

export interface TabProps {
  id: string;
  name: string;
}

export const Tab: React.FC<TabProps> = ({ id, name }) => {
  const activeTab = useActiveTab();
  return (
    <>
      <Link
        href={`?activeTab=${id}`}
        className={`tab ${activeTab === id ? "selected" : ""}`}
      >
        {name}
      </Link>
    </>
  );
};

export interface TabContentProps {
  id: string;
  Component: JSX.Element;
}

export const TabContent: React.FC<TabContentProps> = ({ id, Component }) => {
  const activeTab = useActiveTab();
  return (
    <>
      <Component.type
        {...Component.props}
        className={`tab-content ${activeTab === id ? "selected" : ""}`}
      />
    </>
  );
};
