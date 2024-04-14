"use client";

import dynamic from "next/dynamic";
import { Loader } from "../loader";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false, loading: Loader() });

export type SelectValue = {
    label: string;
    value: string;
};

interface SelectPropsWithOther {
    label: string;
    options?: SelectValue[];
}

interface SelectProps {
    label?: string;
    options: SelectValue[] | SelectPropsWithOther[];
    onChange?: (value: string) => void;
    className?: string;
    classes?: {
        select: string;
    };
    menuIsOpen?: boolean;
}

export const Select = ({
    label,
    options,
    onChange,
    className,
    classes,
    menuIsOpen,
}: SelectProps) => {
    return (
        <div className={className}>
            {label && <span>{label}</span>}
            <ReactSelect
                options={options}
                menuIsOpen={menuIsOpen}
                onChange={(selectValue) => {
                    onChange
                        ? onChange((selectValue as SelectValue).value as string)
                        : null;
                }}
                className={classes && classes.select}
            />
        </div>
    )
};
