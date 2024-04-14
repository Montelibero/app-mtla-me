import { FilterFx } from "@/features/filter/model/model";
import { BlockchainRelationshipsTypes } from "../types";

export const filterTableData = (data: FilterFx) => {
    const filteretTableData: BlockchainRelationshipsTypes.FormatedAccountData[] = [];

    /**
    * Только источник
    */
    if (data.state.source && !data.state.tag && !data.state.goal) {
        data.tableData.forEach((item) => (item.source === data.state.source) &&
            filteretTableData.push(item));
    }

    /**
    * Источник и цель
    */
    if (data.state.source && !data.state.tag && data.state.goal) {
        data.tableData.forEach((item) => (item.source === data.state.source) &&
            (item.goal === data.state.goal) &&
            filteretTableData.push(item));
    }

    /**
    * Только цель
    */
    if (!data.state.source && !data.state.tag && data.state.goal) {
        data.tableData.forEach((item) => (item.goal === data.state.goal) &&
            filteretTableData.push(item));
    }

    /**
    * Только тег
    */
    if (!data.state.source && data.state.tag && !data.state.goal) {
        data.tableData.forEach((item) => (item.tag === data.state.tag) &&
            filteretTableData.push(item));
    }

    /**
    * Источник и тег
    */
    if (data.state.source && data.state.tag && !data.state.goal) {
        data.tableData.forEach((item) => (item.source === data.state.source) &&
            (item.tag === data.state.tag) &&
            filteretTableData.push(item));
    }

    /**
    * Все фильтры
    */
    if (data.state.source && data.state.tag && data.state.goal) {
        data.tableData.forEach((item) => (item.source === data.state.source) &&
            (item.tag === data.state.tag) &&
            (item.goal === data.state.goal) &&
            filteretTableData.push(item));
    }

    return filteretTableData;
};
