'use client';

import React, { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';
import styles from './styles.module.css';
import { useLanguageContext } from '@/shared/lib/hooks';
import { getUniqueSelectOptions, sortTags } from '@/shared/lib/utils';
import { Select } from '@/shared/ui/select';
import { filterModel } from '../model';
import { BlockchainRelationshipsTypes } from '@/shared/lib/types';
import { useForm } from 'effector-forms';
import { FilterTopButtons } from './filter-top-buttons';

interface FilterProps {
    data: BlockchainRelationshipsTypes.FormatedAccountData[];
}

export const Filter = ({ data }: FilterProps) => {
    const { fields, submit } = useForm(filterModel.filterForm);

    const [filteredGoalsOptions, associationMembersByLevel] = useUnit([
        filterModel.$filteredGoalsOptions,
        filterModel.$associationMembersByLevel,
    ]);

    const [resetTopButton, setResetTopButton] = useState(false);

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

    const resetFilter = () => {
        fields.source.onChange('');
        fields.tag.onChange('');
        fields.goal.onChange('');
        setResetTopButton(true);
        submit();
    };

    return (
        <div className={styles.filter}>
            <FilterTopButtons
                resetTopButton={resetTopButton}
                setResetTopButton={setResetTopButton}
                resetFilter={resetFilter}
            />
            <label>
                Источник:
                <Select
                    options={associationMembersByLevel.length > 0 ?
                        getUniqueSelectOptions(associationMembersByLevel, 'source') :
                        getUniqueSelectOptions(data, 'source')}
                    handleSelect={handleSelectSource}
                    fields={fields}
                />
            </label>
            <label>
                Тег:
                <Select
                    options={associationMembersByLevel.length > 0 ?
                        getUniqueSelectOptions(associationMembersByLevel, 'tag') :
                        getUniqueSelectOptions(data, 'tag').sort(sortTags)}
                    delimit
                    handleSelect={handleSelectTag}
                    fields={fields}
                />
            </label>
            <label>
                Цель:
                <Select
                    options={filteredGoalsOptions.length > 0 ? filteredGoalsOptions :
                        getUniqueSelectOptions(data, 'goal')}
                    handleSelect={handleSelectGoal}
                    fields={fields}
                />
            </label>
            <button
                className={styles.filter__reset}
                onClick={resetFilter}
            >
                Сбросить
            </button>
        </div>
    );
};
