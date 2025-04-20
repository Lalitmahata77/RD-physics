
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { env } from "@/data/env/server";

if (!env.AUTH_DRIZZLE_URL) {
  throw new Error("Missing environment variable: AUTH_DRIZZLE_URL");
}

const pool = new Pool({
  connectionString: env.AUTH_DRIZZLE_URL,
});

export const db = drizzle(pool, { schema });

console.log("Database connection initialized successfully.");