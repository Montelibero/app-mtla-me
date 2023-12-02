export interface IMember {
  id: string;
  count: number;
  delegateA?: string;
  delegateC?: string;
  councilReady?: boolean;
  weight?: number;
  delegations?: number;
  removed?: boolean;
  domain?: string;
  toml?: any;
}
