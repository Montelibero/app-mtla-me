import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import { filterTableData, getUniqueSelectOptions } from "@/shared/lib/utils";
import { SelectValue } from "@/shared/ui/select";
import { combine, createEffect, createEvent, createStore, sample } from "effector";
import { debug } from "patronum";

export interface FilterState {
    source: string;
    tag: string;
    goal: string;
}

export interface FilterFx {
    tableData: BlockchainRelationshipsTypes.FormatedAccountData[];
    state: FilterState;
}

const setTableAllData = createEvent<BlockchainRelationshipsTypes.FormatedAccountData[]>();
const setSourceFilter = createEvent<string>();
const setTagFilter = createEvent<string>();
const setGoalFilter = createEvent<string>();

const filterFx = createEffect((data: FilterFx) => filterTableData(data));

const $tableAllData = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);
const $sourceFilter = createStore<string>('');
const $tagFilter = createStore<string>('');
const $goalFilter = createStore<string>('');
const $filterStores = combine({ source: $sourceFilter, tag: $tagFilter, goal: $goalFilter });
const $filteredGoalsOptions = createStore<SelectValue[]>([]);
const $filteredTableData = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);

sample({
    clock: setTableAllData,
    target: $tableAllData,
});

sample({
    clock: setSourceFilter,
    target: $sourceFilter,
});

sample({
    clock: setTagFilter,
    target: $tagFilter,
});

sample({
    clock: setGoalFilter,
    target: $goalFilter,
});

sample({
    clock: $filterStores,
    source: $tableAllData,
    fn: (source, clock) => ({ tableData: source, state: clock }),
    target: filterFx,
});

sample({
    clock: filterFx.doneData,
    target: $filteredTableData,
});

debug($filteredTableData);

sample({
    clock: $filteredTableData,
    fn: (clock) => getUniqueSelectOptions(clock, 'goal'),
    target: $filteredGoalsOptions,
});

export const model = {
    setTableAllData,
    setSourceFilter,
    setTagFilter,
    setGoalFilter,
    $sourceFilter,
    $tagFilter,
    $goalFilter,
    $filteredGoalsOptions,
    $filteredTableData,
};