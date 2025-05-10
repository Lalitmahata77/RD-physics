"use server"
import { z } from "zod";
import { TeacherSchema } from "../schema/teachers";
import { canCreateTeacher, canDeleteTeacher, canUpdateTeacher } from "../permissions/teachers";
import { getCurrentUser } from "@/services/clerk";
import { insertTeacher, updateTeacher as updateTeacherDb, deleteTeacher as deleteTeacherDb } from "../db/teachers";
import { redirect } from "next/navigation";

export async function createTeacher(unsafeData: z.infer<typeof TeacherSchema>){
    const {success, data} = TeacherSchema.safeParse(unsafeData)
    if(!success || !canCreateTeacher(await getCurrentUser())) {
        return { error: true, message: "There was an error creating your Teacher" }
    }

    const teacher = await insertTeacher({ ...data, image: data.image ?? "" })
    redirect(`/admin/teachers/${teacher.id}/edit`)
}

export async function updateTeacher(id:string, unsafeData:z.infer<typeof TeacherSchema>){
    const {success, data} = TeacherSchema.safeParse(unsafeData)
    if(!success || !canUpdateTeacher(await getCurrentUser())){
        return {error: true, message: "Error updating Teacher"}
    }
    await updateTeacherDb(id, { ...data, image: data.image ?? "" })
    redirect(`/admin/teachers`)
}

export async function deleteTeacher(id:string){
    if(!canDeleteTeacher(await getCurrentUser())){
        return {error: true, message:"Faied ! try again"}
    }

    await deleteTeacherDb(id)
    return { error: false, message: "Successfully deleted your teacher" }

}