import { tagsStandart } from "../config";

export const sortTags = (a: string, b: string) => {
    const indexA = tagsStandart.indexOf(a);
    const indexB = tagsStandart.indexOf(b);

    /** 
    * Если оба элемента находятся в tagsStandart, сортируем по их индексу в tagsStandart 
    */
    if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
    }

    /** 
    * Если только один из элементов находится в tagsStandart, он должен идти выше
    */
    else if (indexA !== -1) {
        return -1;
    } else if (indexB !== -1) {
        return 1;
    }

    /** 
    * Если ни один из элементов не находится в tagsStandart, сохраняем текущий порядок
    */
    else {
        return 0;
    }
}
