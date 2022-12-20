import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";
console.log("yes");
export const Example = sequelize.define("Example", {
  field: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otherField: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
