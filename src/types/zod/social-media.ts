import { z } from 'zod'

export const zSocialMedia = z
  .object({
    twitter: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    linkedIn: z.string(),
  })
  .strict()
  .partial()
