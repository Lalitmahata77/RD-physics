import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/PageHeader"
import Link from "next/link"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { db } from "@/drizzle/db"
import {
 
  UserCourseAccessTable,
} from "@/drizzle/schema"
import { getUserCourseAccessGlobalTag } from "@/features/courses/db/cache/userCourseAccess"
import { CourseAccessTable } from "@/features/courseAccess/components/courseAccessTable"

export default async function CoursesAccessPage() {
  const courseAccess = await getCoursesAccess()

  return (
    <div className="container my-6 m-14">
      <PageHeader title="Courses">
        <Button asChild className="w-fit mr-24">
          <Link href="/admin/courseAccess/new">New CourseAccess</Link>
        </Button>
      </PageHeader>

      <CourseAccessTable coursesAccess={courseAccess} />
    </div>
  )
}

async function getCoursesAccess() {
  "use cache"
  cacheTag(
    getUserCourseAccessGlobalTag(),
  )

  return db
    .select({
        courseId: UserCourseAccessTable.courseId,
        userId: UserCourseAccessTable.userId
    })
    .from(UserCourseAccessTable)
   
}