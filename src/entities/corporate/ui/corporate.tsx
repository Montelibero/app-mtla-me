import CorporateMembers from "@/entities/corporate-members/ui/corporate-members";
import CorporateRefresh from "@/features/corporate-refresh/ui/corporate-refresh";

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
