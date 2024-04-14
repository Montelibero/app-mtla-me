import { BlockchainRelationshipsTypes } from "@/shared/lib/types";

interface TableItemProps {
    data: BlockchainRelationshipsTypes.FormatedAccountData;
  }

export const TableItem = ({ data }: TableItemProps) => {
    return <tr>
        <td>{data.source}</td>
        <td>{data.tag}</td>
        <td>{data.goal}</td>
    </tr>
};
