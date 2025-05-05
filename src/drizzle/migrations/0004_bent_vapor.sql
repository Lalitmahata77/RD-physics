ALTER TABLE "purchases" DROP CONSTRAINT "purchases_transactionId_unique";--> statement-breakpoint
ALTER TABLE "purchases" DROP COLUMN "transactionId";--> statement-breakpoint
ALTER TABLE "purchases" DROP COLUMN "refundedAt";--> statement-breakpoint
ALTER TABLE "purchases" DROP COLUMN "payment_method";--> statement-breakpoint
DROP TYPE "public"."payment_method";