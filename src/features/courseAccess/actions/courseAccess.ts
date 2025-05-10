"use server"
import { z } from "zod";
import { CourseAccesSchema } from "../schema/courseAccess";
import { canCreateCourseAccess, canDeleteCourseAccess, canUpdateCourseAccess } from "../permissions/courseAccess";
import { getCurrentUser } from "@/services/clerk";
import { insertCourseAccess, updateCourseAccess as updateCourseAccessDb, deleteCourseAccess as deleteCourseAccessDb } from "../db/courseAccess";
import { redirect } from "next/navigation";

export async function createCourseAccess(unsafeData: z.infer<typeof CourseAccesSchema>){
   const { success, data } = CourseAccesSchema.safeParse(unsafeData)
    
      if (!success || !canCreateCourseAccess(await getCurrentUser())) {
        return { error: true, message: "There was an error creating your courseAccess" }
      }
    
await insertCourseAccess(data)    
      redirect(`/admin/courseAccess`)
}

export async function updateCourseAccess(
    id: string,
    unsafeData: z.infer<typeof CourseAccesSchema>
){
const {success, data} = CourseAccesSchema.safeParse(unsafeData)
if(!success || !canUpdateCourseAccess(await getCurrentUser())){
    return {error: true, message: "There was an error updating your courseAccess"}
}
await updateCourseAccessDb(id, data)
return {error: false, message: "Successfully updated your courseAccess"}
}

export async function deleteCourseAccess(id:string){
    if(!canDeleteCourseAccess(await getCurrentUser())){
        return {error: true, message: "Error deleting your courseAccess"}

    }
    await deleteCourseAccessDb(id)
    return {error:false, message: "successfully deleted your courseAccess"}
}