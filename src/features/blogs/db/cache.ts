import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export function getblogGlobalTag() {
  return getGlobalTag("blogs")
}

export function getBlogIdTag(id: string) {
  return getIdTag("blogs", id)
}

export function revalidateBlogCache(id: string) {
  revalidateTag(getblogGlobalTag())
  revalidateTag(getBlogIdTag(id))
}