import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema/*.ts",
  out: "./db/migrations",
  // dbCredentials: {
  //   url: "./db/database.db", // 👈 this could also be a path to the local sqlite file
  // },
} satisfies Config;
