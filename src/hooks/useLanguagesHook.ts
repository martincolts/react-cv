import { Language, data } from "../data"

export const useLanguagesHook = (): Language[] => {
    return data.otherInfo.languages
}