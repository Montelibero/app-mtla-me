export namespace BlockchainRelationshipsTypes {
    export interface BlockchainRelationships {
        createDate: string;
        knownTokens: string[];
        usedSources: string[];
        accounts: Accounts;
    }

    export interface Accounts {
        [address: string]: Account;
    }

    export interface Account {
        balances: AccountBalances;
        tags: AccountTags;
    };

    export interface AccountBalances {
        [currency: string]: string;
    };

    export interface AccountTags {
        [tag: string]: string[];
    };

    export type FilterFields = 'source' | 'tag' | 'goal';

    export interface FormatedAccountData {
        tokens: AccountBalances;
        source: string;
        tag: string;
        goal: string;
    }
}
