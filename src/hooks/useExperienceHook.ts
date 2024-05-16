import { WorkExperience, data } from "../data"


export const useExperienceHook = (): WorkExperience[] => {
    return data.workExperience
}