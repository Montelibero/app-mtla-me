'use client';

import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { tablePaginationModel } from '../model';
import { BlockchainRelationshipsTypes } from '@/shared/lib/types';

interface TablePaginationProps {
    data: Array<BlockchainRelationshipsTypes.FormatedAccountData[]>;
    active: number;
}

export const TablePagination = ({ data, active }: TablePaginationProps) => {
    const onClickPagination = (index: number) => {
        tablePaginationModel.setPage(index);
    };

    return (
        <div className={styles.tablePagination}>
            {data && data.map((item, index) => (
                <div
                    key={index}
                    className={clsx(
                        styles.tablePagination__button,
                        active === index && styles.tablePagination__active,
                    )}
                    onClick={() => onClickPagination(index)}>
                    {index + 1}
                </div>
            ))}
        </div>
    );
};
