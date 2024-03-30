'use client';

import { Assembly } from "@/components/Assembly";
import { Council } from "@/components/Council";
import { Tab, TabContent } from "../components/Tab";
import { Corporate } from "@/components/Corporate";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

export default function Main() {
  const translations = useTranslations();

  return (
    <>
      <LanguageSwitcher />
      <nav style={{ display: "flex" }}>
        <Tab id="assembly" name={translations.assembly.name} />
        <Tab id="council" name={translations.council.name} />
        <Tab id="corporate" name={translations.corporate.name} />
      </nav>
      <main>
        <TabContent id="assembly" Component={<Assembly />} />
        <TabContent id="council" Component={<Council />} />
        <TabContent id="corporate" Component={<Corporate />} />
      </main>
    </>
  );
}
