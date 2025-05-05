import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { db } from "@/drizzle/db";
import { PurchaseTable as DbPurchaseTable } from "@/drizzle/schema";
import { PurchaseTable } from "@/features/purchases/components/PurchaseTable";
import { getPurchaseGlobalTag } from "@/features/purchases/db/cache";

export default async function PurchasePage() {
  const purchases = await getPurchases();

  return (
    <div className="container my-6 mx-14">
      {/* Page Header */}
      <PageHeader title="Purchases">
        <Button asChild className="w-fit mr-18">
          <Link href="/admin/purchases/new">New Purchase</Link>
        </Button>
      </PageHeader>

      {/* Purchases Table */}
      <PurchaseTable purchases={purchases} />
    </div>
  );
}

async function getPurchases() {
  "use cache";
  cacheTag(getPurchaseGlobalTag());

  try {
    // Fetch raw purchases from the database
    const rawPurchases = await db
      .select({
        id: DbPurchaseTable.id,
        pricePaidInCents: DbPurchaseTable.pricePaidInCents,
        productId: DbPurchaseTable.productId,
        userId: DbPurchaseTable.userId,
        createdAt: DbPurchaseTable.createdAt,
      })
      .from(DbPurchaseTable);

    // Map raw purchases to a structured format
    return rawPurchases.map((purchase) => ({
      id: purchase.id,
      pricePaidInCents: purchase.pricePaidInCents,
      createdAt: purchase.createdAt,
      
      user: {
        id: purchase.userId,
        name: purchase.userId,
      },
      product: {
        id: purchase.productId,
        name: purchase.productId
      }
    }));
  } catch (error) {
    console.error("Error fetching purchases:", error);
    return [];
  }
}