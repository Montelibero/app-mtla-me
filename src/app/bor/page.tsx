import { borRequests } from "@/shared/api/requests/bor";
import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import { formatAccounts } from "@/shared/lib/utils";
import BlockchainRelationshipsPage from "@/widgets/blockchain-relationships/ui/blockchain-relationships";

export default async function BlockchainRelationships() {
  const data = await borRequests.getBorData() as BlockchainRelationshipsTypes.BlockchainRelationships;
  const formatedAccountsData = formatAccounts(data.accounts);

  return <BlockchainRelationshipsPage
    createDate={data.createDate}
    formatedAccounts={formatedAccountsData}
  />;
}
