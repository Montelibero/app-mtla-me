"use client";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import styles from './styles.module.css';
import clsx from "clsx";
import { tagsStandart } from "@/shared/lib/config";

interface SelectProps {
    options: string[];
    delimit?: boolean;
    handleSelect: (value: string) => void;
    fields: {
        source: {
            value: string;
        }
        tag: {
            value: string;
        }
        goal: {
            value: string;
        }
    };
}

export const Select = ({ options, delimit, handleSelect, fields }: SelectProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [listVisibility, setListVisibility] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [border, setBorder] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const filtered = options.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
        );

        setSearchValue(value);
        setFilteredOptions(filtered);
    };

    useEffect(() => {
        /** 
        * Определяем элемент списка, с которого начинаются теги, не входящие в стандарт
        */
        if (delimit) {
            options.forEach((item) => {
                if (tagsStandart.includes(item) && !border) {
                    setBorder(item);
                }
            });
        }
    }, []);

    useEffect(() => {
         /** 
        * Очистка значения селекта при полном сбросе фильтра
        */
        if (fields.source.value === '' &&
            fields.tag.value === '' &&
            fields.goal.value === '') {
            setSearchValue('');
        }
    }, [fields.source.value, fields.tag.value, fields.goal.value])

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    const onSelect = (e: MouseEvent<HTMLDivElement>, option: string) => {
        e.preventDefault();

        setSearchValue(option);
        handleSelect(option);
        setListVisibility(false);
    };

    return (
        <div className={styles.select}>
            <input
                className={styles.search}
                type="text"
                placeholder="Поиск..."
                value={searchValue}
                onChange={handleInputChange}
                onClick={() => setListVisibility(true)}
                onFocus={() => setListVisibility(true)}
                onBlur={() => setListVisibility(false)}
            />
            <div className={clsx(styles.options, listVisibility && styles.options__visible)}>
                {filteredOptions.map((option, index) => (
                    <div key={index}>
                        <div className={styles.option} onMouseDown={(e) => onSelect(e, option)}>
                            {option}
                        </div>
                        {option === border && (
                            <div className={styles.other}>Прочее</div>
                        )}
                    </div>
                ))}
                {!filteredOptions.length && (
                    <span className={styles.noResult}>Нет результата...</span>
                )}
            </div>
        </div>
    )
};
