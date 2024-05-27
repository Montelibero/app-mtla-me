import { FilterByLevelFx } from "@/features/filter/model/model";
import { BlockchainRelationshipsTypes } from "../types";

export const setOnlyAssociationMembers = (
    data: BlockchainRelationshipsTypes.FormatedAccountData[],
) => {
    const result = data.filter(item => {
        return item.tokens.hasOwnProperty('MTLAP') || item.tokens.hasOwnProperty('MTLAC');
    });

    return result;
};

export const setByLevel = (data: FilterByLevelFx) => {
    if (data.level === 1) {
        return filteredByLevel(data.fields, 1, 2);
    } else if (data.level === 2) {
        return filteredByLevel(data.fields, 2, 3);
    } else if (data.level === 3) {
        return filteredByLevel(data.fields, 3, 4);
    } else if (data.level === 4) {
        return filteredByLevel(data.fields, 4, 5);
    } else if (data.level === 5) {
        return filteredByLevel(data.fields, 5);
    }

    return [];
};

const filteredByLevel = (
    data: BlockchainRelationshipsTypes.FormatedAccountData[],
    min: number,
    max = Infinity,
) => {
    const result = data.filter(item => {
        if (item.tokens.MTLAP) {
            const MTLAPValue = parseFloat(item.tokens.MTLAP);
            return MTLAPValue >= min && MTLAPValue < max;
        } else if (item.tokens.MTLAC) {
            const MTLACValue = parseFloat(item.tokens.MTLAC);
            return MTLACValue >= min && MTLACValue < max;
        }
    });

    return result;
};
