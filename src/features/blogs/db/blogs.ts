import { db } from "@/drizzle/db"
import { BlogTable } from "@/drizzle/schema"
import { revalidateBlogCache } from "./cache"
import { eq } from "drizzle-orm"

export async function insertBlog(data: typeof BlogTable.$inferInsert){
    const [newBlog] = await db.insert(BlogTable).values(data).returning()
    if (newBlog == null) throw new Error("Failed to create blog")
        revalidateBlogCache(newBlog.id)
    return newBlog
}

export async function updateBlog(id: string, data: typeof BlogTable.$inferInsert){
    const [updatedBlog] = await db.update(BlogTable).set(data).where(eq(BlogTable.id, id)).returning()
    if(updatedBlog == null) throw new Error("Failed to update blog")
        revalidateBlogCache(updatedBlog.id)
    return updatedBlog

}

export async function deleteBlog(id: string){
    const [deletedBlog] = await db.delete(BlogTable).where(eq(BlogTable.id, id)).returning()
    if(deletedBlog == null) throw new Error("Failed to delete blog")
        revalidateBlogCache(deletedBlog.id)
    return deletedBlog
}