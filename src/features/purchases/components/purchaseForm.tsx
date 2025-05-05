"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { purchaseSchema } from "../schema/purchases"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPurchase, updatePurchases } from "../action/purchases"
import { toast } from "sonner"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export function PurchaseForm({
    purchase,
    products,
    users
}: {
    purchase?: {
        id: string
        userId: string[]
        productId: string[]
        pricePaidInCents: number
        productDetails: {
            name: string
            description: string
            imageUrl: string
        }
    }
    products: {
        id: string
        name: string
    }[]
    users: {
        id: string
        name: string
    }[]
}){
    const form = useForm<z.infer<typeof purchaseSchema>>({
        resolver: zodResolver(purchaseSchema),
        defaultValues: purchase
            ? {
                ...purchase,
                userId: purchase.userId[0] || "", // Use the first userId as a string
                productId: purchase.productId[0] || "" // Use the first productId as a string
              }
            : {
                pricePaidInCents: 0,
                
                
                userId: "", // Default to an empty string
                productId: "" // Default to an empty string
              }
    })

    async function onSubmit(values: z.infer<typeof purchaseSchema>){
        const action = purchase == null ? createPurchase : updatePurchases.bind(null, purchase.id)
        const data = await action(values)
        toast.success(data.message)
    }
    return (
        <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
            {/* User and Product Selection Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* User ID */}
                <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium text-gray-700">Customer</FormLabel>
                            <Select
                                onValueChange={(value) => field.onChange(value)}
                                defaultValue={field.value?.toString()}
                            >
                                <FormControl>
                                    <SelectTrigger className="hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        <SelectValue placeholder="Select customer" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {users.map((user) => (
                                        <SelectItem
                                            key={user.id}
                                            value={user.id.toString()}
                                            className="hover:bg-blue-50 focus:bg-blue-50"
                                        >
                                            {user.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                {/* Product ID */}
                <FormField
                    control={form.control}
                    name="productId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-medium text-gray-700">Product</FormLabel>
                            <Select
                                onValueChange={(value) => field.onChange(value)}
                                defaultValue={field.value?.toString()}
                            >
                                <FormControl>
                                    <SelectTrigger className="hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        <SelectValue placeholder="Select product" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {products.map((product) => (
                                        <SelectItem
                                            key={product.id}
                                            value={product.id.toString()}
                                            className="hover:bg-blue-50 focus:bg-blue-50"
                                        >
                                            {product.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />
            </div>

           

            {/* Price Paid */}
            <FormField
  control={form.control}
  name="pricePaidInCents"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="font-medium text-gray-700">Price (USD cents)</FormLabel>
      <FormControl>
        <Input
          type="number"
          {...field}
          value={field.value || ""} // Ensure the value is not undefined
          onChange={(e) => field.onChange(e.target.valueAsNumber || 0)} // Convert to number
          placeholder="Enter amount in cents"
          className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 placeholder:text-gray-400"
        />
      </FormControl>
      <FormMessage className="text-xs" />
    </FormItem>
  )}
/>

            {/* Submit Button */}
            <div className="flex justify-end">
                <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
                >
                    save
                </Button>
            </div>
        </form>
    </Form>
    )

}