import { z } from 'zod'

export const zBuilder = {
  z: z.object,
  str: z.string(),
  num: z.coerce.number(),
  bool: z.coerce.boolean(),
  arr: z.array,
}
