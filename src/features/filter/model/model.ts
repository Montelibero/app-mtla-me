import { BlockchainRelationshipsTypes } from "@/shared/lib/types";
import {
    filterTableData,
    getUniqueSelectOptions,
    setByLevel,
    setOnlyAssociationMembers,
} from "@/shared/lib/utils";
import { createEffect, createEvent, createStore, sample } from "effector";
import { Form, createForm } from "effector-forms";

export interface FilterState {
    source: string;
    tag: string;
    goal: string;
}

export interface FilterFx {
    tableData: BlockchainRelationshipsTypes.FormatedAccountData[];
    state: FilterState;
}

export interface FilterByLevelFx {
    fields: BlockchainRelationshipsTypes.FormatedAccountData[];
    level: number;
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
const initOnlyAssociationMembers = createEvent();
const setFilterByLevel = createEvent<number>();

const filterFx = createEffect((data: FilterFx) => filterTableData(data));
const setOnlyAssociationMembersFx = createEffect((data:
    BlockchainRelationshipsTypes.FormatedAccountData[]) => setOnlyAssociationMembers(data));
const filterByLevelFx = createEffect((data: FilterByLevelFx) => setByLevel(data));

const $tableAllData = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);
const $filteredGoalsOptions = createStore<string[]>([]);
const $filteredTableData = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);
const $associationMembers = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);
const $associationMembersByLevel = createStore<BlockchainRelationshipsTypes.FormatedAccountData[]>([]);

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

/** 
* Инициализируем только участников ассоциации
*/
sample({
    clock: initOnlyAssociationMembers,
    source: $tableAllData,
    fn: (source, clock) => source,
    target: setOnlyAssociationMembersFx,
})

sample({
    clock: setOnlyAssociationMembersFx.doneData,
    target: $associationMembers,
});

/** 
* Фильтруем участников по уровню участия
*/
sample({
    clock: setFilterByLevel,
    source: $associationMembers,
    fn: (source, clock) => ({ fields: source, level: clock }),
    target: filterByLevelFx,
});

sample({
    clock: filterByLevelFx.doneData,
    target: $filteredTableData,
});

sample({
    clock: filterByLevelFx.doneData,
    target: $associationMembersByLevel,
});

export const model = {
    filterForm,
    setTableAllData,
    setSourceFilter,
    setTagFilter,
    setGoalFilter,
    initOnlyAssociationMembers,
    setFilterByLevel,
    $filteredGoalsOptions,
    $tableAllData,
    $filteredTableData,
    $associationMembersByLevel,
};
