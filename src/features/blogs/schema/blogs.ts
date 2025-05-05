import { z } from "zod";

export const BlogSchema = z.object({
    category: z.string(),
    title: z.string().min(1, {message: "Title is required"}),
    author: z.string().min(1, {message: "Author is required"}),
    excerpt: z.string().min(1, {message: "Excerpt is required"})
})