import { UserRole } from '@prisma/client'
import { z } from 'zod'

export const zUserRole = z.enum([
  UserRole.Admin,
  UserRole.Mentor,
  UserRole.Mentee,
])
