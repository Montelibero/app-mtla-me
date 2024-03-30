export interface I18nType {
    common: {
        title: string;
        data: string;
        buttonTitle: string;
    },
    assembly: {
        name: string;
        content: {
            members: {
                name: string;
                title: string;
                tableHead: string;
            },
            delegateTree: string;
            newAssembly: {
                title: string;
                firstColumn: string;
                secondColumn: string;
                thirdColumn: string;
            }
        }
    },
    council: {
        name: string;
        content: {
            currentC: {
                title: string;
                firstColumn: string;
                secondColumn: string;
            },
            members: {
                name: string;
            },
            delegateTree: {
                name: string;
            },
            newC: {
                title: string;
                firstColumn: string;
                secondColumn: string;
                thirdColumn: string;
            },
            changes: {
                title: string;
                firstColumn: string;
                secondColumn: string;
                thirdColumn: string;
                noChanges: string;
            }
        }
    },
    corporate: {
        name: string;
        content: {
            members: {
                title: string;
                secondColumn: string;
                fourthColumn:string;
            }
        }
    }
}
