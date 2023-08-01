import { z } from 'zod'
import { zMeetingAvailability } from './meeting-availability'
import { zNote } from './note'

export const zMentorAvailability = z.object({
  mentor: z.string(),
  isAvailable: z.coerce.boolean(),
  note: z.array(zNote).optional(),
  meetingAvailability: zMeetingAvailability.partial(),
})
