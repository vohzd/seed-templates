import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const product = sqliteTable("product", {
  id: integer("id").primaryKey(),
  name: text("name"),
});
