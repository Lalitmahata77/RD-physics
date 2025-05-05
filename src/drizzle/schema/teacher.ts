import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "../schema-helper";

export const TeacherTable = pgTable("teachers", {
    id,
    name: text().notNull(),
    role: text().notNull(),
    image: text().notNull()
})