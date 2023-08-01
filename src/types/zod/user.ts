import { z } from 'zod'
import { zSkill } from './skill'

export const zUser = z.object({
  firstName: z.string(),
  lastName: z.string(),
  picture: z.string(),
  email: z.string(),
  password: z.string(),
  gender: z.string(),
  phone: z.string(),
  bio: z.string(),
  language: z.string(),
  title: z.string(),
  organization: z.string(),
  tags: z.array(z.string()),
  skills: z.array(zSkill),
  education: z.string(),
})
