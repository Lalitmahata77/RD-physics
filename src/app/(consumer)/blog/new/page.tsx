import { PageHeader } from "@/components/PageHeader"
import { BlogForm } from "@/features/blogs/components/BlogForm"

export default async function NewbBlogPage() {
  return (
    <div className="container my-6">
      <PageHeader title="New Blog" className=" ml-9" />
      <BlogForm  />
    </div>
  )
}

