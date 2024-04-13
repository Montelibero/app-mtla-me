import { borRequests } from "@/shared/api/requests/bor";
import { formatAccounts } from "@/shared/lib/utils";
import BlockchainRelationshipsPage from "@/widgets/blockchain-relationships/ui/blockchain-relationships";

export default async function BlockchainRelationships() {
  const data = await borRequests.getBorData();
  const formatedAccountsData = formatAccounts(data.accounts);

  return <BlockchainRelationshipsPage
    createDate={data.createDate}
    accounts={formatedAccountsData}
  />;
}
