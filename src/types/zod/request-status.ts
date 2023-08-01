import { RequestStatus } from '@prisma/client'
import { z } from 'zod'

export const zRequestStatus = z.enum([
  RequestStatus.Sending,
  RequestStatus.Read,
  RequestStatus.Accepted,
  RequestStatus.Rejected,
])
