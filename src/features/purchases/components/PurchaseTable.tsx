// import { ActionButton } from "@/components/ActionButton"
import {
  SkeletonArray,
  SkeletonButton,
  SkeletonText,
} from "@/components/Skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {  formatPlural, formatPrice } from "@/lib/formatters"
import { deletePurchase } from "../action/purchases"
import { ActionButton } from "@/components/ActionButton"
import { Trash2Icon } from "lucide-react"
// import { deletePurchase } from "../db/purchases"

export function PurchaseTable({
  purchases,
}: {
  purchases: {
    id: string
    pricePaidInCents: number
    createdAt: Date
   
    user: {
      name: string
    }
  }[]
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            {" "}
            {formatPlural(purchases.length, {
              singular: "sale",
              plural: "sales",
            })}
          </TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases.map(purchase => (
          <TableRow key={purchase.id}>
            <TableCell>
              <div className="flex items-center gap-4">
              </div>
            </TableCell>
            <TableCell>{purchase.user.name}</TableCell>
            <TableCell>
              {
                formatPrice(purchase.pricePaidInCents / 100)
              }
            </TableCell>
            <TableCell>
             
                <ActionButton
                  action={deletePurchase.bind(null, purchase.id)}
                  variant="destructiveOutline"
                  requireAreYouSure
                >
                  Refund
                </ActionButton>

                
                 <ActionButton
                  variant="destructiveOutline"
                  requireAreYouSure
                  action={deletePurchase.bind(null, purchase.id)}
                >
                  <Trash2Icon />
                  <span className="sr-only">Delete</span>
                </ActionButton>
              
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function UserPurchaseTableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <SkeletonArray amount={3}>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-4">
                <div className="size-12 bg-secondary animate-pulse rounded" />
                <div className="flex flex-col gap-1">
                  <SkeletonText className="w-36" />
                  <SkeletonText className="w-3/4" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <SkeletonText className="w-12" />
            </TableCell>
            <TableCell>
              <SkeletonButton />
            </TableCell>
          </TableRow>
        </SkeletonArray>
      </TableBody>
    </Table>
  )
}