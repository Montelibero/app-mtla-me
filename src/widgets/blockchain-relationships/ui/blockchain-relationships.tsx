'use client';

import { Table } from "@/entities/table";
import { Filter } from "@/features/filter";
import LanguageSwitcher from "@/features/language-switcher/ui/language-switcher";
import { useTranslations } from "@/shared/lib/hooks";
import { BlockchainRelationshipsTypes } from "@/shared/lib/types";

interface BlockchainRelationshipsPageProps {
  createDate: string;
  formatedAccounts: BlockchainRelationshipsTypes.FormatedAccountData[];
}

export default function BlockchainRelationshipsPage({
  createDate,
  formatedAccounts,
}: BlockchainRelationshipsPageProps) {
  const translations = useTranslations();

  return (
    <>
      <LanguageSwitcher />
      <h3>Фильтр</h3>
      <Filter data={formatedAccounts} />
      <Table data={formatedAccounts} />
    </>
  );
}
