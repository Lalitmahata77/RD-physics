import {  UserRole } from "@/drizzle/schema"

export function canCreateCourseAccess({ role }: { role: UserRole | undefined }) {
  return role === "admin"
}

export function canUpdateCourseAccess({ role }: { role: UserRole | undefined }) {
  return role === "admin"
}

export function canDeleteCourseAccess({ role }: { role: UserRole | undefined }) {
  return role === "admin"
}

