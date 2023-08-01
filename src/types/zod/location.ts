import { z } from 'zod'

export const zLocation = z.object({
  country: z.string(),
  province: z.string(),
  city: z.string(),
})
