'use client';

import React, { useEffect } from 'react';
import { useUnit } from 'effector-react';
import styles from './styles.module.css';
import { useLanguageContext } from '@/shared/lib/hooks';
import { getUniqueSelectOptions, sortTags } from '@/shared/lib/utils';
import { Select } from '@/shared/ui/select';
import { filterModel } from '../model';
import { BlockchainRelationshipsTypes } from '@/shared/lib/types';

interface FilterProps {
    data: BlockchainRelationshipsTypes.FormatedAccountData[];
}

export const Filter = ({ data }: FilterProps) => {
    const { locale, changeLanguage } = useLanguageContext();

    const [filteredGoalsOptions] = useUnit([
        filterModel.$filteredGoalsOptions,
    ]);

    useEffect(() => {
        filterModel.setTableAllData(data);
    }, []);
    
    return (
        <div className={styles.filter}>
            <Select
                label='Источник:'
                options={getUniqueSelectOptions(data, 'source')}
                onChange={(value) => {
                    filterModel.setSourceFilter(value);
                }}
                className={styles.filter__item}
                classes={{
                    select: styles.filter__source,
                }}
            />
            <Select
                label='Тег:'
                options={sortTags(getUniqueSelectOptions(data, 'tag'))}
                onChange={(value) => {
                    filterModel.setTagFilter(value);
                }}
                className={styles.filter__item}
                classes={{
                    select: styles.filter__source,
                }}
            />
            <Select
                label='Цель:'
                options={filteredGoalsOptions.length > 0 ?
                    filteredGoalsOptions :
                    getUniqueSelectOptions(data, 'goal')}
                onChange={(value) => {
                    filterModel.setGoalFilter(value);
                }}
                className={styles.filter__item}
                classes={{
                    select: styles.filter__source,
                }}
            />
        </div>
    )
}
