import Changes from "@/entities/changes/ui/changes";
import CurrentC from "@/entities/current-c/ui/current-c";
import DelegateTree from "@/entities/delegate-tree/ui/delegate-tree";
import Members from "@/entities/members/ui/members";
import NewC from "@/entities/new-c/ui/new-c";
import Refresh from "@/features/refresh/ui/refresh";
import { useTranslations } from "@/shared/lib/hooks";

export interface CouncilProps {
  className?: string;
}

export const Council: React.FC<CouncilProps> = ({ className }) => {
  const translations = useTranslations();

  return (
    <article className={className}>
      <Refresh />
      <CurrentC />
      <hr />
      <Members
        delegateId="delegateC"
        delegateName={translations.council.content.members.name}
      />
      <hr />
      <DelegateTree
        header={translations.council.content.delegateTree.name}
        type="delegateC"
        key="delegateC"
      />
      <hr />
      <NewC />
      <hr />
      <Changes />
    </article>
  );
};
