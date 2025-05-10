import { UserRole } from "@/drizzle/schema";

export function canCreateTeacher({role}: {role:UserRole | undefined}){
    return role === "admin"
}
export function canUpdateTeacher({role}:{role:UserRole | undefined}){
    return role === "admin"
}

export function canDeleteTeacher({role}:{role:UserRole | undefined}){
    return role === "admin"
}