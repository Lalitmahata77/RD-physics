"use server"

import { z } from "zod";
import { purchaseSchema } from "../schema/purchases";
import { canCreatePurchases, canDeletePurchase, canUpdatePurchase } from "../permissions/purchases";
import { getCurrentUser } from "@/services/clerk";
import { insertPurchase, updatePurchase as updatePurchaseDb, deletePurchase as deletePurchaseDb } from "../db/purchases";
import { redirect } from "next/navigation";

export async function createPurchase(unsafeData: z.infer<typeof purchaseSchema>){
    const {success, data} = purchaseSchema.safeParse(unsafeData)
    if (!success || !canCreatePurchases(await getCurrentUser())) {
        return { error: true, message: "There was an error creating your purchase" }
      }

      await insertPurchase(data)
      redirect("/admin/purchases")

}

export async function updatePurchases(
    id: string,
    unsafeData: z.infer<typeof purchaseSchema>
){
const {success, data} = purchaseSchema.safeParse(unsafeData)
if (!success || !canUpdatePurchase(await getCurrentUser())) {
    return { error: true, message: "There was an error updating your product" }
  }

  await updatePurchaseDb(id, data)
  redirect("/admin/purchases")
}

export async function deletePurchase(id: string){
    if (!canDeletePurchase(await getCurrentUser())) {
        return { error: true, message: "Error deleting your product" }
      }

      await deletePurchaseDb(id)
      return { error: false, message: "Successfully deleted your product" }

}

