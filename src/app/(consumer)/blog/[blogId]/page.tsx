import React from "react";
import { db } from "@/drizzle/db";
import { BlogTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";



const BlogDetailsPage = async ({ params }: {params: {blogId:string}}) => {
  const { blogId } = params;

  // Fetch blog details from the database
  const blog = await db
    .select()
    .from(BlogTable)
    .where(eq(BlogTable.id, blogId))
    .then((blogs) => blogs[0]);

  if (!blog) {
    return (
      <div className="container mx-auto my-8 px-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog Not Found</h1>
        <p className="text-gray-600 mt-4">
          The blog you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-12 px-4 sm:px-6 max-w-4xl">
    {/* Blog Header */}
    <div className="mb-8 space-y-3">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          {blog.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500">
          <span className="font-medium text-gray-700">{blog.author}</span>
          <span className="hidden sm:block">•</span>
          <span className="text-sm italic">
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      </div>
      <div className="pt-4">
        <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {blog.category}
        </span>
      </div>
    </div>

    {/* Blog Content */}
    <article className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <p className="text-gray-700 leading-loose text-opacity-90">
        {blog.excerpt}
      </p>
    </article>
  </div>
  );
};

export default BlogDetailsPage;

