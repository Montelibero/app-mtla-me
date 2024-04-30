import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import { filterTableData, getUniqueSelectOptions } from "@/shared/lib/utils";
import { createEffect, createEvent, createStore, sample } from "effector";
import { Form, createForm } from "effector-forms";
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

const filterForm: Form<FilterState> = createForm({
    fields: {
        source: {
            init: '',
        },
        tag: {
            init: '',
        },
        goal: {
            init: '',
        },
    },
})

const setTableAllData = createEvent<BlockchainRelationshipsTypes.FormatedAccountData[]>();
const setSourceFilter = createEvent<string>();
const setTagFilter = createEvent<string>();
const setGoalFilter = createEvent<string>();

const filterFx = createEffect((data: FilterFx) => filterTableData(data));

const $tableAllData = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);
const $filteredGoalsOptions = createStore<string[]>([]);
const $filteredTableData = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);

sample({
    clock: setTableAllData,
    target: $tableAllData,
});

sample({
    clock: filterForm.formValidated,
    source: $tableAllData,
    fn: (source, clock) => ({ tableData: source, state: clock }),
    target: filterFx,
});

sample({
    clock: filterFx.doneData,
    target: $filteredTableData,
});

sample({
    clock: $filteredTableData,
    fn: (clock) => getUniqueSelectOptions(clock, 'goal'),
    target: $filteredGoalsOptions,
});

debug($filteredTableData);

export const model = {
    filterForm,
    setTableAllData,
    setSourceFilter,
    setTagFilter,
    setGoalFilter,
    $filteredGoalsOptions,
    $tableAllData,
    $filteredTableData,
};