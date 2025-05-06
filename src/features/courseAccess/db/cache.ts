import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export function getCourseAccessGlobalTag() {
  return getGlobalTag("courseAccess")
}

export function getCourseAccessIdTag(id: string) {
  return getIdTag("courseAccess", id)
}

export function revalidateCourseAccessCache(id: string) {
  revalidateTag(getCourseAccessGlobalTag())
  revalidateTag(getCourseAccessIdTag(id))
}