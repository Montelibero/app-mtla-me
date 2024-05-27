'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { filterModel } from '../model';
import { FilterTopButton } from './filter-top-button';

interface FilterTopButtonsProps {
    resetTopButton: boolean;
    setResetTopButton: (value: boolean) => void;
    resetFilter: () => void;
}

type Levels = [1, 2, 3, 4, 5];

export const FilterTopButtons = ({
    resetTopButton,
    setResetTopButton,
    resetFilter,
}: FilterTopButtonsProps) => {
    const [activeButton, setActiveButton] = useState({
        all: true,
        levels: false,
    });

    const [activeLevelButton, setActiveLevelButton] = useState({
        level1: false,
        level2: true,
        level3: false,
        level4: false,
        level5: false,
    });

    const levels: Levels = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (resetTopButton) {
            setActiveButton({
                all: true,
                levels: false,
            });
            setActiveLevelButton({
                level1: false,
                level2: true,
                level3: false,
                level4: false,
                level5: false,
            });
            setResetTopButton(false);
        }
    }, [resetTopButton]);

    const setActiveLevel = (level: number) => {
        setActiveLevelButton({
            level1: level === 1,
            level2: level === 2,
            level3: level === 3,
            level4: level === 4,
            level5: level === 5,
        });
    };

    return (
        <div className={styles.filter__buttons}>
            <button
                className={clsx(activeButton.all && styles.filter__activeBtn)}
                onClick={() => {
                    setActiveButton({ all: true, levels: false });
                    resetFilter();
                }}
            >
                Все
            </button>
            <button
                className={clsx(activeButton.levels && styles.filter__activeBtn)}
                onClick={() => {
                    setActiveButton({ all: false, levels: true });
                    filterModel.initOnlyAssociationMembers();
                    filterModel.setFilterByLevel(2);
                }}
            >
                Участники Ассоциации
            </button>
            {activeButton.levels && (
                <div className={styles.filter__levels}>
                    {levels.map((level) => (
                        <FilterTopButton
                            key={level}
                            activeLevelButton={activeLevelButton}
                            setActiveLevel={setActiveLevel}
                            level={level}
                        />
                    ))}
                </div>
            )}
        </div>
    )
};
