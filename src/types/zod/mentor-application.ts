import { z } from 'zod'
import { zQuestionnaire } from './questionnaire'

export const zMentorApplication = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  country: z.string(),
  province: z.string(),
  city: z.string(),
  portfolio: z.array(z.string()).optional(),
  questionnaire: zQuestionnaire,
  consent: z.coerce.boolean(),
  signature: z.string(),
})
