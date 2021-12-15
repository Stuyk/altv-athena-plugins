import { CATEGORY } from "../enums/enumCategories"

function getCategories(): Array<string> {
    return Object.values(CATEGORY);
}

export {
    getCategories
}