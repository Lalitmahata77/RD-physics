"use server"

import { z } from "zod";
import { BlogSchema } from "../schema/blogs";
import { insertBlog, updateBlog as updateBlogDb, deleteBlog as deleteBlogDb } from "../db/blogs";
import { redirect } from "next/navigation";

export async function createBlog(unsafeData: z.infer<typeof BlogSchema> ){
    const {success, data} = BlogSchema.safeParse(unsafeData)
    if(!success) return { error: true, message: "There was an error creating your course" }
    const blog = await insertBlog(data)
    redirect(`/blog/${blog.id}`)
}

export async function updateBlog(id: string, unsafeData: z.infer<typeof BlogSchema>){
    const {success, data} = BlogSchema.safeParse(unsafeData)
    if(!success) return { error: true, message: "There was an error updating your course" }
    const blog = await updateBlogDb(id, data)
    redirect(`/blog/${blog.id}`)
}

export async function deleteBlog(id: string){

  await deleteBlogDb(id)
  
    return { error: false, message: "Successfully deleted your blog" }
}