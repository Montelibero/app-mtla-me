'use client';

import { BlockchainRelationshipsTypes } from "@/shared/lib/types";

interface TableItemProps {
    data: BlockchainRelationshipsTypes.FormatedAccountData;
}

export const TableItem = ({ data }: TableItemProps) => {
    return (
        <tr>
            <td>{data.source.replace(
                data.source.substring(4, data.source.length - 4),
                "..."
            )}</td>
            <td>{data.tag}</td>
            <td>{data.goal.replace(
                data.goal.substring(4, data.goal.length - 4),
                "..."
            )}</td>
        </tr>
    )
};
