import { IMember } from "../interfaces";

export const sumCount = (
    member: IMember & { children?: IMember[] }
): number => {
    if (!member) return 0;
    return (
        (member.count > 1 ? member.count : 0) +
            +(member.children?.length
                ? member.children?.map(sumCount).reduce((prev, cur) => prev + cur, 0)
                : 0)
    );
};