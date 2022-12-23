console.log("node...");
import { Example } from "./db/models/example.js";
import { sequelize } from "./db/sequelize.js";

(async () => {
  console.log("gravy levels");
  await sequelize.sync();

  // create
  // Example.create({
  //   field: `Some fieldcreated at ${Date.now()}`,
  //   otherField: `Testing ${Math.random()}`,
  // });

  // read
  // const example = await Example.findAll();
  // console.log(JSON.stringify(example));

  // update

  // delete

  // something wacky with bulkCreate

  // const items = Array(100000).fill({
  //   field: `Some fieldcreated at ${Date.now()}`,
  //   otherField: `Testing ${Math.random()}`,
  // });

  // console.log("created lots of items");
  // console.log(items);
  // Example.bulkCreate(items);

  const example = await Example.findAll();
  console.log(JSON.stringify(example));
})();
