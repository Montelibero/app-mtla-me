'use client';

import { filterModel } from "@/features/filter";
import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import { TableItem } from "@/shared/ui/table-row";
import { useUnit } from "effector-react";

interface TableProps {
  data: BlockchainRelationshipsTypes.FormatedAccountData[];
}

export const Table = ({ data }: TableProps) => {
  const [filteredTableData] = useUnit([
    filterModel.$filteredTableData,
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Источник</th>
          <th>Тег</th>
          <th>Цель</th>
        </tr>
      </thead>
      <tbody>
        {!filteredTableData.length && data.map((item, index) => (
          <TableItem key={index} data={item} />
        ))}
        {filteredTableData.length > 0 && filteredTableData.map((item, index) => (
          <TableItem key={index} data={item} />
        ))}
      </tbody>
    </table>
  );
};
