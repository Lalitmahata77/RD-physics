import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schema-helper";


export const BlogTable = pgTable("blogs", {
    id,
    category: text().notNull(),
    author : text().notNull(),
    title: text().notNull(),
    excerpt: text().notNull(),
    createdAt
})