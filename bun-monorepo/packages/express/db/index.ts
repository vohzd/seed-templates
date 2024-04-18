// import { Database } from "bun:sqlite";
// const db = new Database("./database/db.sqlite", { create: true });

// export { db };

import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const sqlite = new Database("./db/database.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "./db/migrations" });

export { db };
