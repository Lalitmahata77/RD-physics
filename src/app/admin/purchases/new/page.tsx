import { PageHeader } from "@/components/PageHeader"
import { db } from "@/drizzle/db"
import {  ProductTable, UserTable } from "@/drizzle/schema"
import { getProductGlobalTag } from "@/features/products/db/cache"
import { PurchaseForm } from "@/features/purchases/components/purchaseForm"
import { getUserGlobalTag } from "@/features/users/db/cache"
import { asc } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"

export default async function NewProductPage() {
  return (
    <div className="container my-6">
      <PageHeader title="New Purchase" />
      <PurchaseForm products={await getProducts()} users={await getUsers()} />
    </div>
  )
}

async function getProducts() {
  "use cache"
  cacheTag(getProductGlobalTag())

  return db.query.ProductTable.findMany({
    orderBy: asc(ProductTable.name),
    columns: { id: true, name: true },
  })
}
async function getUsers(){
    "use cache"
    cacheTag(getUserGlobalTag())
return db.query.UserTable.findMany({
    orderBy: asc(UserTable.name),
    columns: {id: true, name: true, email: true}
})
}