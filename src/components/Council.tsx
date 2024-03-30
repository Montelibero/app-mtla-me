import CurrentC from "./CurrentC";
import Members from "./Members";
import DelegateTree from "./DelegateTree";
import NewC from "./NewC";
import Changes from "./Changes";
import Refresh from "@/components/Refresh";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nTabs } from "@/i18n/main-page";

export interface CouncilProps {
  className?: string;
}

export const Council: React.FC<CouncilProps> = ({ className }) => {
  const { locale } = useLanguageContext();

  return (
    <article className={className}>
      <Refresh />
      <CurrentC />
      <hr />
      <Members delegateId="delegateC" delegateName={locale === 'ru' ?
        i18nTabs.councilRu.content.members.name :
        i18nTabs.councilEn.content.members.name} />
      <hr />
      <DelegateTree
        header={locale === 'ru' ?
          i18nTabs.councilRu.content.delegateTree.name :
          i18nTabs.councilEn.content.delegateTree.name}
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
