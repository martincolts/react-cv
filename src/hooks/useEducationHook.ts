import { Education, data } from "../data"

export const useEducationHook = (): Education[] => {
    return data.otherInfo.education
}