CREATE TYPE "public"."payment_method" AS ENUM('khalti', 'esewa');--> statement-breakpoint
ALTER TABLE "purchases" ADD COLUMN "payment_method" "payment_method" DEFAULT 'esewa' NOT NULL;