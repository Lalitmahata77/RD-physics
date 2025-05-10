import { z } from "zod";

export const TeacherSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    role: z.string().min(1, {message: "Role is required"}),
    image: z.string().optional()
})