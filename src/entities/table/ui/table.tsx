'use client';

import { filterModel } from "@/features/filter";
import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import { TableItem } from "@/shared/ui/table-row";
import { useUnit } from "effector-react";
import styles from './styles.module.css';
import { TablePagination, tablePaginationModel } from "@/entities/table-pagination";
import { useEffect } from "react";

interface TableProps {
    data: BlockchainRelationshipsTypes.FormatedAccountData[];
}

export const Table = ({ data }: TableProps) => {
    const [tableAllData, filteredTableData, paginatedData, activePage] = useUnit([
        filterModel.$tableAllData,
        filterModel.$filteredTableData,
        tablePaginationModel.$paginatedData,
        tablePaginationModel.$activePage,
    ]);

    useEffect(() => {
        if (filteredTableData.length > 0) {
            tablePaginationModel.setPaginateData(filteredTableData);
        }
        if (!filteredTableData.length) {
            tablePaginationModel.setPaginateData(tableAllData);
        }
    }, [filteredTableData]);

    useEffect(() => {
        tablePaginationModel.setPaginateData(data);
    }, []);

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Источник</th>
                        <th>Тег</th>
                        <th>Цель</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length > 0 && paginatedData[activePage].map((item, index) => (
                        <TableItem key={index} data={item} />
                    ))}
                </tbody>
            </table>
            {paginatedData.length > 1 && (
                <TablePagination data={paginatedData} active={activePage} />
            )}
            {!paginatedData.length && (
                <div className={styles.empty}>Данные не найдены</div>
            )}
        </div>
    );
};
