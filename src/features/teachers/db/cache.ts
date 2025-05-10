import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export function getTeacherGlobalTag() {
  return getGlobalTag("teachers")
}

export function getTeacherIdTag(id: string) {
  return getIdTag("teachers", id)
}

export function revalidateTeacherCache(id: string) {
  revalidateTag(getTeacherGlobalTag())
  revalidateTag(getTeacherIdTag(id))
}