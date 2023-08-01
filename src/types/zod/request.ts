import { z } from 'zod'

export const zRequest = z.object({
  mentor: z.string(),
  mentee: z.string(),
  goal: z.string(),
  description: z.string().optional(),
  hopeFromMentorship: z.string(),
  timeline: z.string(),
})
