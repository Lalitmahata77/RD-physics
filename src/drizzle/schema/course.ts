import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schema-helper";
import { relations } from "drizzle-orm";
import { CourseProductTable } from "./courseProduct";
import { UserCourseAccessTable } from "./userCourseAccess";
import { CourseSectionTable } from "./courseSection";


export const CourseTable = pgTable("courses", {
    id,
    name: text().notNull(),
    description: text().notNull(),
    createdAt,
    updatedAt
})


export const CourseRelationships = relations(CourseTable, ({ many }) => ({
    courseProducts: many(CourseProductTable),
    userCourseAccesses: many(UserCourseAccessTable),
    courseSections: many(CourseSectionTable),
  }))