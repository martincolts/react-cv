import { PersonalData, data } from "./data"

export const usePersonalDataHook = (): PersonalData => {
    return data.personalData
}