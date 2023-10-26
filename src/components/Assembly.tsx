import Members from "./Members";
import DelegateTree from "./DelegateTree";
import Refresh from "@/components/Refresh";
import NewAssembly from "./NewAssembly";

export interface AssemblyProps {
  className?: string;
}

export const Assembly: React.FC<AssemblyProps> = ({ className }) => {
  return (
    <article className={className}>
      <Refresh />
      <Members />
      <hr />
      <DelegateTree
        header="Проверка делегаций для Собрания:"
        type="delegateA"
        key="delegateA"
      />
      <hr />
      <NewAssembly />
    </article>
  );
};
