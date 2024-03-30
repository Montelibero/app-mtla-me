import Members from "./Members";
import DelegateTree from "./DelegateTree";
import Refresh from "@/components/Refresh";
import NewAssembly from "./NewAssembly";
import { useTranslations } from "@/hooks/useTranslations";

export interface AssemblyProps {
  className?: string;
}

export const Assembly: React.FC<AssemblyProps> = ({ className }) => {
  const translations = useTranslations();

  return (
    <article className={className}>
      <Refresh />
      <Members
        delegateId="delegateA"
        delegateName={translations.assembly.content.members.name}
      />
      <hr />
      <DelegateTree
        header={translations.assembly.content.delegateTree}
        type="delegateA"
        key="delegateA"
      />
      <hr />
      <NewAssembly />
    </article>
  );
};
