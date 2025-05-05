import {z} from "zod"

export const purchaseSchema = z.object({
    pricePaidInCents: z.number().int().nonnegative(), // Non-negative integer for price
    userId: z.string().uuid(), // UUID for the user ID
    productId: z.string().uuid(), // UUID for the product ID
    
   
  });