import { z } from 'zod'

export const zQuestionnaire = z.object({
  q1: z.string(),
  q2: z.string(),
  q3: z.string(),
  q4: z.string(),
})
