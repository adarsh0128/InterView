
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";



export const MockInterview=pgTable('mockInterview' , {
  id:serial('id').primaryKey(),
  jsonMockResp:text('jsonMockResp').notNull(),
  jobPosition:text('jobPosition').notNull(),
  jobDesc:text('jobDesc').notNull(),
  jobExperience:text('jobExperience').notNull(),
  createdBy:varchar('createdBy').notNull(),
  createdAt:varchar('createdAt').notNull(),
  mockId:varchar('mockId').notNull(),

})

export const UserAnswerTable = pgTable('userAnswer', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mockId').notNull(),
  question: varchar('question').notNull(),
  correctAns: text('correctAns'),
  userAns: text('userAns'),
  feedback: text('feedback'),
  rating: varchar('rating'),
  userEmail: varchar('userEmail'),
  createdAt: varchar('createdAt'),
});
