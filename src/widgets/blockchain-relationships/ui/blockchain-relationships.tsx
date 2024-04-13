'use client';

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Table } from "@/entities/table";
import { useTranslations } from "@/hooks/useTranslations";

export default function BlockchainRelationshipsPage({ createDate, accounts }) {
  const translations = useTranslations();

  return (
    <>
      <LanguageSwitcher />
      <Table data={accounts} />
      {/* <Filters filters={filters} onChange={handleFilterChange} />
      {filteredData && <Table data={filteredData} />} */}
    </>
  );
}
