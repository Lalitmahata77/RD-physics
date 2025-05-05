ALTER TABLE "purchases" RENAME COLUMN "stripeSessionId" TO "transactionId";--> statement-breakpoint
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_stripeSessionId_unique";--> statement-breakpoint
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_transactionId_unique" UNIQUE("transactionId");