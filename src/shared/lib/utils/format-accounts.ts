import { BlockchainRelationshipsTypes } from "../types";

export const formatAccounts = (accounts: BlockchainRelationshipsTypes.Accounts) => {
    let resultArray: BlockchainRelationshipsTypes.FormatedAccountData[] = [];

    /** 
    * Перебираем объект accounts
    */
    for (let source in accounts) {
        /** 
        * Проверяем, есть ли у текущего источника теги
        */
        if (accounts[source].tags) {
            /** 
            * Перебираем теги текущего источника
            */
            for (let tag in accounts[source].tags) {
                /** 
                * Перебираем цели текущего тега
                */
                accounts[source].tags[tag].forEach((goal) => {
                    /** 
                    * Создаем объект и добавляем его в массив результатов
                    */
                    resultArray.push({
                        source: source,
                        tag: tag,
                        goal: goal
                    });
                });
            }
        }
    }

    return resultArray;
}