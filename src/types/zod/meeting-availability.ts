import { z } from 'zod'
import { zAvailability } from './availability'

export const zMeetingAvailability = z.object({
  daily: z.array(zAvailability.nullable()).optional(),
  weekly: z.array(zAvailability.nullable()).optional(),
  monthly: z.array(zAvailability.nullable()).optional(),
  specific: z.array(zAvailability.nullable()).optional(),
})
