import { z } from "zod";

export const CourseAccesSchema = z.object({
    userId: z.string().uuid(),
    courseId: z.string().uuid()
})