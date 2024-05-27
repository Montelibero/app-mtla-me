'use client';

import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { filterModel } from '../model';

interface FilterTopButtonProps {
    activeLevelButton: {
        level1: boolean;
        level2: boolean;
        level3: boolean;
        level4: boolean;
        level5: boolean;
    };
    setActiveLevel: (value: number) => void;
    level: 1 | 2 | 3 | 4 | 5;
}

export const FilterTopButton = ({
    activeLevelButton,
    setActiveLevel,
    level,
}: FilterTopButtonProps) => {
    return (
        <button
            className={clsx(activeLevelButton[`level${level}`] && styles.filter__activeBtn)}
            onClick={() => {
                setActiveLevel(level);
                filterModel.setFilterByLevel(level);
            }}>
            {level}
        </button>
    )
};
