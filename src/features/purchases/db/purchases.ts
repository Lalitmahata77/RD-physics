import { db } from "@/drizzle/db"
import { PurchaseTable } from "@/drizzle/schema"
import { revalidatePurchaseCache } from "./cache"
import { eq } from "drizzle-orm"

export async function insertPurchase(
  data: typeof PurchaseTable.$inferInsert,
  trx: Omit<typeof db, "$client"> = db
) {

  const [newPurchase] = await trx
    .insert(PurchaseTable)
    .values({
      ...data
    })
    .onConflictDoNothing()
    .returning()

  if (newPurchase != null) revalidatePurchaseCache(newPurchase)

  return newPurchase
}

export async function updatePurchase(
  id: string,
  data: Partial<typeof PurchaseTable.$inferInsert>,
  trx: Omit<typeof db, "$client"> = db
) {

  const [updatedPurchase] = await trx
    .update(PurchaseTable)
    .set({
      ...data,
    })
    .where(eq(PurchaseTable.id, id))
    .returning()
  if (updatedPurchase == null) throw new Error("Failed to update purchase")

  revalidatePurchaseCache(updatedPurchase)

  return updatedPurchase
}


export async function deletePurchase(id: string){
  const [deletedPurchase] = await db
  .delete(PurchaseTable)
  .where(eq(PurchaseTable.id, id))
  .returning()
  if (deletedPurchase) {
    revalidatePurchaseCache(deletedPurchase)
  }

  return deletedPurchase
}