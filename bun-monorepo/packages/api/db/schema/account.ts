import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const account = sqliteTable("account", {
  id: integer("id").primaryKey(),
  email: text("email").unique(),
  password: text("password"),
  createdAt: text("createdAt").default(String(Date.now())),
});
