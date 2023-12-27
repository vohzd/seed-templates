import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const file = sqliteTable("file", {
  id: integer("id").primaryKey(),
  name: text("name"),
});
