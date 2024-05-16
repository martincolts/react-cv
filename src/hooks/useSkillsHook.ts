import { SkillEntry, data } from "../data"

export const useSkillsHook = (): SkillEntry[] => {
    return data.skills
}