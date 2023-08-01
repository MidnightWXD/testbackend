import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

/*
exporting the models separately so it's easy to 
track where models are accessed across the codebase
*/
export const {
  user: Users,
  location: Locations,
  socialMedia: SocialMedias,
  skill: Skills,
  menteeQuestionnaire: MenteeQuestionnaires,
  mentorApplication: MentorApplications,
  questionnaire: Questionnaires,
  mentorAvailability: MentorAvailabilities,
  note: Notes,
  meetingAvailability: MeetingAvailabilities,
  availability: Availabilities,
  meeting: Meetings,
  request: Requests,
  webVitals: WebVitals,
} = prisma
