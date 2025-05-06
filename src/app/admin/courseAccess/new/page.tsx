import { PageHeader } from "@/components/PageHeader";
import { db } from "@/drizzle/db";
import { CourseTable, UserTable } from "@/drizzle/schema";
import { CourseAccessForm } from "@/features/courseAccess/components/courseAccessForm";
import { getCourseGlobalTag } from "@/features/courses/db/cache/courses";
import { asc } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export default async function NewCourseAccessPage() {
  const courses = await getCourses();
  const users = await getUsers();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto">
      <PageHeader title="New Course Access" />
      <CourseAccessForm courses={courses} users={users} />
    </div>
  );
}

async function getCourses() {
  "use cache";
  cacheTag(getCourseGlobalTag());

  return db.query.CourseTable.findMany({
    orderBy: asc(CourseTable.name),
    columns: { id: true, name: true },
  });
}

async function getUsers() {
  "use cache";
  cacheTag("users"); // Replace with a proper cache tag for users if available

  return db.query.UserTable.findMany({
    orderBy: asc(UserTable.name),
    columns: { id: true, name: true },
  });
}