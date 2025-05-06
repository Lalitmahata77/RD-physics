import { z } from "zod";
import { CourseAccesSchema } from "../schema/courseAccess";
import { db } from "@/drizzle/db";
import { UserCourseAccessTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function insertCourseAccess(data: z.infer<typeof CourseAccesSchema>){
    const [newCourseAccess] = await db
    .insert(UserCourseAccessTable)
    .values(data)
    .returning()
    if(newCourseAccess == null) throw new Error("failes to create course access")

        return newCourseAccess
}
export async function updateCourseAccess(id: string, data: z.infer<typeof CourseAccesSchema>){
    const [updatedCourseAccess] = await db
    .update(UserCourseAccessTable)
    .set(data)
    .where(eq(UserCourseAccessTable.userId, id))
    .returning()
    if(updatedCourseAccess == null) throw new Error("failes to update course access")
        return updatedCourseAccess
}

export async function deleteCourseAccess(id: string){
    const [deletedCourseAccess] = await db
    .delete(UserCourseAccessTable)
    .where(eq(UserCourseAccessTable.userId, id))
    .returning()
    if(deletedCourseAccess == null) throw new Error("failes to delete course access")
        return deletedCourseAccess
}