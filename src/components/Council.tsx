import CurrentC from "./CurrentC";
import Members from "./Members";
import DelegateTree from "./DelegateTree";
import NewC from "./NewC";
import Changes from "./Changes";
import Refresh from "@/components/Refresh";

export interface CouncilProps {
  className?: string;
}

export const Council: React.FC<CouncilProps> = ({ className }) => {
  return (
    <article className={className}>
      <Refresh />
      <Members delegateId="delegateC" delegateName="Делегат в Совете" />
      <hr />
      <CurrentC />
      <hr />
      <DelegateTree
        header="Проверка делегаций для Совета:"
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
