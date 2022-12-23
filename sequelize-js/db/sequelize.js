import { Sequelize } from "sequelize";

console.log("sequelie....");
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/sqlite.db",
});
