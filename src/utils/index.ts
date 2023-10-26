import { IMember } from "@/interfaces";

export const sumCount = (
  member: IMember & { children?: IMember[] }
): number => {
  if (!member) return 0;
  return (
    member.count +
    +(member.children?.length
      ? member.children?.map(sumCount).reduce((prev, cur) => prev + cur, 0)
      : 0)
  );
};

export const sumWeight = (
  type: "delegateA" | "delegateC",
  root: boolean,
  member: IMember & { children?: IMember[] }
): number => {
  if (!member) return 0;
  return (
    (member[type] && root ? 0 : member.count) +
    +(member.children?.length
      ? member.children
          ?.map(sumWeight.bind(null, type, false))
          .reduce((prev, cur) => prev + cur, 0)
      : 0)
  );
};
