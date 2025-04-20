import { PageHeader } from "@/components/PageHeader"
import { CourseForm } from "@/features/courses/components/CourseForm"

export default function NewCoursePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto">
      <PageHeader title="New Course" />
      <CourseForm />
    </div>
  )
}
