import { UserPropFilter } from '../../types/prop-filter'

export const PublicMenteeProps: UserPropFilter = {
  id: true,
  firstName: true,
  lastName: true,
  picture: true,
  email: true,
  gender: true,
  location: true,
  bio: true,
  language: true,
  title: true,
  socialMedia: true,
  education: true,
  role: true,
}

export const AdminMenteeProps: UserPropFilter = {
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
  education: true,
}
