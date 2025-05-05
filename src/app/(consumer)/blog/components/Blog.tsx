import { db } from '@/drizzle/db'
import { BlogTable } from '@/drizzle/schema'
import { getblogGlobalTag } from '@/features/blogs/db/cache'
import { asc } from 'drizzle-orm'
import { cacheTag } from 'next/dist/server/use-cache/cache-tag'
import Link from 'next/link'
import React from 'react'

const Blog = async() => {
    const posts = await getPublicBlogs()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <article key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {post?.category}
                </span>
                <span className="text-sm text-gray-500">{post?.author}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post?.title}</h3>
              <p className="text-gray-600 mb-4">{post?.excerpt}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/blog/${post?.id}`}
                  className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2"
                >
                  Read more
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
                <span className="text-sm text-gray-500">{post?.createdAt?.toLocaleDateString()}</span>
              </div>
            </article>
          ))}
        </div>
  )
}

export default Blog


async function getPublicBlogs() {
    "use cache"
    cacheTag(getblogGlobalTag())
  
    return db.query.BlogTable.findMany({
      columns: {
        id: true,
        category: true,
        author: true,
        title: true,
        excerpt: true,
        createdAt: true

      },
      orderBy: asc(BlogTable.title),
    })
  }