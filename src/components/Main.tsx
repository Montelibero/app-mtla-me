'use client';

import { Assembly } from "@/components/Assembly";
import { Council } from "@/components/Council";
import { Tab, TabContent } from "../components/Tab";
import { Corporate } from "@/components/Corporate";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { i18nTabs } from "@/i18n/main-page";

export default function Main() {
  const { locale } = useLanguageContext();

  return (
    <>
      <LanguageSwitcher />
      <nav style={{ display: "flex" }}>
        <Tab id="assembly" name={locale === 'ru' ? i18nTabs.assemblyRu.name : i18nTabs.assemblyEn.name} />
        <Tab id="council" name={locale === 'ru' ? i18nTabs.councilRu.name : i18nTabs.councilEn.name} />
        <Tab id="corporate" name={locale === 'ru' ? i18nTabs.corporateRu.name : i18nTabs.corporateEn.name} />
      </nav>
      <main>
        <TabContent id="assembly" Component={<Assembly />} />
        <TabContent id="council" Component={<Council />} />
        <TabContent id="corporate" Component={<Corporate />} />
      </main>
    </>
  );
}
