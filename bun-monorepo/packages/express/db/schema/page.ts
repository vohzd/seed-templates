import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const page = sqliteTable("page", {
  id: integer("id").primaryKey(),
  name: text("name"),
});
