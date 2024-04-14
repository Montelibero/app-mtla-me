import { IMember } from "../interfaces";

export const sumWeight = (
    type: "delegateA" | "delegateC",
    root: boolean,
    member: IMember & { children?: IMember[] }
): number => {
    if (!member) return 0;
    
    return (
        (member[type] && root ? 0 : member.count > 0 ? 1 : 0) +
        +(member.children?.length
            ? member.children
                ?.map(sumWeight.bind(null, type, false))
                .reduce((prev, cur) => prev + cur, 0)
            : 0)
    );
};
