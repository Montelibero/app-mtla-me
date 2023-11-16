export interface IMember {
  id: string;
  count: number;
  delegateA?: string;
  delegateC?: string;
  weight?: number;
  delegations?: number;
  removed?: boolean;
  domain?: string;
  toml?: any;
}
