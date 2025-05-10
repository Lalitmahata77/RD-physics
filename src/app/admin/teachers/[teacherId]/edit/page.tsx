import { PageHeader } from "@/components/PageHeader"
import { db } from "@/drizzle/db"
import { TeacherTable } from "@/drizzle/schema"
import TeacherForm from "@/features/teachers/components/TeacherForm"
import { getTeacherIdTag } from "@/features/teachers/db/cache"
import { eq } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { notFound } from "next/navigation"

export default async function EditTeacherPage({params}:{params: Promise<{teacherId:string}>}){
    const {teacherId} = await params
    const teacher = await getTeacher(teacherId)
      if (teacher == null) return notFound()
    
    return (
<div className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto">
      <PageHeader title="Update teacher" />
      <TeacherForm teachers={teacher}/>
        </div>
    )

}

async function getTeacher(id:string) {
    "use cache"
cacheTag(getTeacherIdTag(id))

return db.query.TeacherTable.findFirst({
    columns : {
        id: true,
        name: true,
        role: true,
        image:true
    },
    where: eq(TeacherTable.id, id),
})
    
}