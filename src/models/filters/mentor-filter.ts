import { UserPropFilter } from '../../types/prop-filter'

export const PublicMentorProps: UserPropFilter = {
  id: true,
  firstName: true,
  lastName: true,
  picture: true,
  gender: true,
  location: true,
  bio: true,
  language: true,
  title: true,
  socialMedia: true,
  organization: true,
  tags: true,
  skills: true,
}

export const AdminMentorProps: UserPropFilter = {
  id: true,
  firstName: true,
  lastName: true,
  picture: true,
  email: true,
  gender: true,
  phone: true,
  location: true,
  role: true,
  bio: true,
  language: true,
  title: true,
  socialMedia: true,
  loginCount: true,
  hasProfileSet: true,
  organization: true,
  tags: true,
  skills: true,
  status: true,
}
