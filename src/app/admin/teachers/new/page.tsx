import { PageHeader } from "@/components/PageHeader"
import TeacherForm from "@/features/teachers/components/TeacherForm"

export default function NewTeacherPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto">
      <PageHeader title="New Course" />
      <TeacherForm/>
    </div>
  )
}
