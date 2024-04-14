/**
* uniqueOptionsGenerator создает массив уникальных значений из data
* для использования в компоненте Select.
*/

import { BlockchainRelationshipsTypes } from "../types";

export const getUniqueSelectOptions = (
    items: BlockchainRelationshipsTypes.FormatedAccountData[],
    key: BlockchainRelationshipsTypes.FilterFields
) => {
    const uniqueValues = new Set();

    items.forEach((item) => {
        if (item[key]) {
            uniqueValues.add(item[key]);
        }
    });

    return (Array.from(uniqueValues) as string[])
        .map((value: string) => ({
            label: value,
            value,
        }));
};