import Members from "./Members";
import DelegateTree from "./DelegateTree";
import Refresh from "@/components/Refresh";
import NewAssembly from "./NewAssembly";
import { useLanguageContext } from "@/hooks/useLanguageContext";
import { i18nTabs } from "@/i18n/main-page";

export interface AssemblyProps {
  className?: string;
}

export const Assembly: React.FC<AssemblyProps> = ({ className }) => {
  const { locale } = useLanguageContext();

  return (
    <article className={className}>
      <Refresh />
      <Members
        delegateId="delegateA"
        delegateName={locale === 'ru' ?
          i18nTabs.assemblyRu.content.members.name :
          i18nTabs.assemblyEn.content.members.name}
      />
      <hr />
      <DelegateTree
        header={locale === 'ru' ?
          i18nTabs.assemblyRu.content.delegateTree :
          i18nTabs.assemblyEn.content.delegateTree}
        type="delegateA"
        key="delegateA"
      />
      <hr />
      <NewAssembly />
    </article>
  );
};
