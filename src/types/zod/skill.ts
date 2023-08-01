import { z } from 'zod'

export const zSkill = z.object({
  skill: z.string(),
  proficiency: z.coerce.number(),
})
