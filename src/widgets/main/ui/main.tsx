'use client';

import { Assembly } from "@/entities/assembly";
import { Corporate } from "@/entities/corporate";
import { Council } from "@/entities/council";
import LanguageSwitcher from "@/features/language-switcher/ui/language-switcher";
import { useTranslations } from "@/shared/lib/hooks";
import { Tab, TabContent } from "@/shared/ui";

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
