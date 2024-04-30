'use client';

import React, { useEffect } from 'react';
import { useUnit } from 'effector-react';
import styles from './styles.module.css';
import { useLanguageContext } from '@/shared/lib/hooks';
import { getUniqueSelectOptions, sortTags } from '@/shared/lib/utils';
import { Select } from '@/shared/ui/select';
import { filterModel } from '../model';
import { BlockchainRelationshipsTypes } from '@/shared/lib/types';
import { useForm } from 'effector-forms';

interface FilterProps {
    data: BlockchainRelationshipsTypes.FormatedAccountData[];
}

export const Filter = ({ data }: FilterProps) => {
    const { fields, submit } = useForm(filterModel.filterForm);

    const [filteredGoalsOptions] = useUnit([
        filterModel.$filteredGoalsOptions,
    ]);

    useEffect(() => {
        filterModel.setTableAllData(data);
    }, []);

    const handleSelectSource = (value: string) => {
        fields.source.onChange(value);
        submit();
    };

    const handleSelectTag = (value: string) => {
        fields.tag.onChange(value);
        submit();
    };

    const handleSelectGoal = (value: string) => {
        fields.goal.onChange(value);
        submit();
    };

    return (
        <div className={styles.filter}>
            <label>
                Источник:
                <Select
                    options={getUniqueSelectOptions(data, 'source')}
                    handleSelect={handleSelectSource}
                />
            </label>
            <label>
                Тег:
                <Select
                    options={getUniqueSelectOptions(data, 'tag').sort(sortTags)}
                    delimit
                    handleSelect={handleSelectTag}
                />
            </label>
            <label>
                Цель:
                <Select
                    options={filteredGoalsOptions.length > 0 ? filteredGoalsOptions :
                        getUniqueSelectOptions(data, 'goal')}
                    handleSelect={handleSelectGoal}
                />
            </label>
        </div>
    );
};
