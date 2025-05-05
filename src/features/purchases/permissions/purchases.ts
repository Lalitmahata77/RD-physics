import { UserRole } from "@/drizzle/schema";


export function canCreatePurchases({role}: { role: UserRole | undefined}){
    return role === "admin"
}

export function canUpdatePurchase({ role }: { role: UserRole | undefined }) {
    return role === "admin"
  }
  
  export function canDeletePurchase({ role }: { role: UserRole | undefined }) {
    return role === "admin"
  }
  
