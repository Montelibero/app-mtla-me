'use client';

import { Table } from "@/entities/table";
import LanguageSwitcher from "@/features/language-switcher/ui/language-switcher";
import { useTranslations } from "@/shared/lib/hooks";

export default function BlockchainRelationshipsPage({ createDate, accounts }) {
  const translations = useTranslations();

  return (
    <>
      <LanguageSwitcher />
      <Table data={accounts} />
    </>
  );
}
