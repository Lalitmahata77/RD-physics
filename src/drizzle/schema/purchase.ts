import {
    pgTable,
    integer,
    uuid,
    jsonb,
   
  } from "drizzle-orm/pg-core"
  import { relations } from "drizzle-orm"
  import { UserTable } from "./user"
  import { ProductTable } from "./product"
import { createdAt, id, updatedAt } from "../schema-helper"
  export const PurchaseTable = pgTable("purchases", {
    id,
    pricePaidInCents: integer().notNull(),
    productDetails: jsonb()
    .$type<{ name: string; description: string; imageUrl: string }>(),
   
    userId: uuid()
      .notNull()
      .references(() => UserTable.id, { onDelete: "restrict" }),
    productId: uuid()
      .notNull()
      .references(() => ProductTable.id, { onDelete: "restrict" }),
    
    createdAt,
    updatedAt,
  })
  
  export const PurchaseRelationships = relations(PurchaseTable, ({ one }) => ({
    user: one(UserTable, {
      fields: [PurchaseTable.userId],
      references: [UserTable.id],
    }),
    product: one(ProductTable, {
      fields: [PurchaseTable.productId],
      references: [ProductTable.id],
    }),
  }))