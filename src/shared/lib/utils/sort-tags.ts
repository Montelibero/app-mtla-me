import { SelectValue } from "@/shared/ui/select";
import { tagsStandart } from "../config";
import { BlockchainRelationshipsTypes } from "../types";

export const sortTags = (data: SelectValue[]) => {
    const sortedTags: SelectValue[] = [];

    data.forEach((item) => {
        const tag = tagsStandart.find((tag) => tag === item.value);

        if (tag) {
            sortedTags.push({
                label: tag,
                value: tag,
            })
        }
    });

    const sortedTagsWithOther = [
        ...sortedTags,
        {
            label: 'Прочее',
            options: data.filter(tag => !tagsStandart.includes(tag.value))
        }
    ];

    return sortedTagsWithOther;
}