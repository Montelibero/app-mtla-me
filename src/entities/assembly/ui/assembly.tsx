import DelegateTree from "@/entities/delegate-tree/ui/delegate-tree";
import Members from "@/entities/members/ui/members";
import NewAssembly from "@/entities/new-assembly/ui/new-assembly";
import Refresh from "@/features/refresh/ui/refresh";
import { useTranslations } from "@/shared/lib/hooks";

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
