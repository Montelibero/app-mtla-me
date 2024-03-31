import CurrentC from "./CurrentC";
import Members from "./Members";
import DelegateTree from "./DelegateTree";
import NewC from "./NewC";
import Changes from "./Changes";
import Refresh from "@/components/Refresh";
import { useTranslations } from "@/hooks/useTranslations";

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
