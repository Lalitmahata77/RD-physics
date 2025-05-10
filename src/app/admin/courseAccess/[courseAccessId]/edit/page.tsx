import { PageHeader } from "@/components/PageHeader"
import { db } from "@/drizzle/db"
import {  UserCourseAccessTable } from "@/drizzle/schema"
import { CourseAccessForm } from "@/features/courseAccess/components/courseAccessForm"
import { getCourseAccessGlobalTag } from "@/features/courseAccess/db/cache"

import {  eq } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { notFound } from "next/navigation"

export default async function EditcourseAccessPage({
  params,
}: {
  params: Promise<{ courseId: string }>
}) {
  const { courseId } = await params
  const product = await getCoursesAccess(courseId)

  if (product == null) return notFound()

  return (
    <div className="container my-6">
      <PageHeader title="New Product" />
     <CourseAccessForm courses={[{ id: product?.courseId, name: "Course Name" }]} users={[]}/>
    </div>
  )
}



async function getCoursesAccess(id: string) {
  "use cache"
  cacheTag(getCourseAccessGlobalTag())

  return db.query.UserCourseAccessTable.findFirst({
    columns: {
      courseId: true,
      userId: true,
    },
    where: eq(UserCourseAccessTable.courseId, id),
  })
}