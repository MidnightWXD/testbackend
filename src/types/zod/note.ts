import { z } from 'zod'

export const zNote = z.object({
  note: z.string(),
  dateTime: z.string(),
})
