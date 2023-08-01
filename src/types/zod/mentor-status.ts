import { MentorStatus } from '@prisma/client'
import { z } from 'zod'

export const zMentorStatus = z.enum([
  MentorStatus.Pending,
  MentorStatus.Verified,
  MentorStatus.Rejected,
])
