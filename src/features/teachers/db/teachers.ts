import { db } from "@/drizzle/db";
import { TeacherTable } from "@/drizzle/schema";
import { revalidateTeacherCache } from "./cache";
import { eq } from "drizzle-orm";

export async function insertTeacher(data: typeof TeacherTable.$inferInsert){
const [newTeacher] = await db
.insert(TeacherTable)
.values(data)
.returning()
if(newTeacher == null) throw new Error("Teacher creation failed")
    revalidateTeacherCache(newTeacher.id)
return newTeacher

}

export async function updateTeacher(id:string, data:typeof TeacherTable.$inferInsert){
    const [updatedTeacher] = await db
    .update(TeacherTable)
    .set(data)
    .where(eq(TeacherTable.id,id))
    .returning()
    if(updatedTeacher == null) throw new Error("update failed! try again")

        revalidateTeacherCache(updatedTeacher.id)
        return updatedTeacher
}

export async function deleteTeacher(id:string){
    const [deletedTeacher] = await db
    .delete(TeacherTable)
    .where(eq(TeacherTable.id,id))
    .returning()

    return deletedTeacher

}