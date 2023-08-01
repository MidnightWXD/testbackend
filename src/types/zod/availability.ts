import { z } from 'zod'

export const zAvailability = z.object({
  startDateTime: z.string(),
  endDateTime: z.string(),
})
