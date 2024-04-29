import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { debug } from "patronum";

type PaginateDataStore = Array<BlockchainRelationshipsTypes.FormatedAccountData[]>;

const setPaginateData = createEvent<BlockchainRelationshipsTypes.FormatedAccountData[]>();
const setPage = createEvent<number>();

const filterFx = createEffect((data: BlockchainRelationshipsTypes.FormatedAccountData[]) => {
    const pages = Math.ceil(data.length / 200);
    const pageArrays = [];

    for (let i = 0; i < pages; i++) {
        const start = i * 200;
        const end = (i + 1) * 200;
        const pageData = data.slice(start, end);

        pageArrays.push(pageData);
    }

    return pageArrays;
});

const $paginatedData = createStore<PaginateDataStore>([]);
const $activePage = createStore(0);

sample({
    clock: setPaginateData,
    target: filterFx,
});

sample({
    clock: filterFx.doneData,
    target: $paginatedData,
});

debug($paginatedData);

sample({
    clock: setPage,
    target: $activePage,
});

export const model = {
    setPaginateData,
    setPage,
    $paginatedData,
    $activePage,
};