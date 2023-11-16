import CorporateMembers from "./CorporateMembers";
import CorporateRefresh from "./CorporateRefresh";

export interface CorporateProps {
  className?: string;
}

export const Corporate: React.FC<CorporateProps> = ({ className }) => {
  return (
    <article className={className}>
      <CorporateRefresh />
      <CorporateMembers />
    </article>
  );
};
