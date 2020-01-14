/*
 * DEPS
 */
const express                       = require("express");
const port                          = 1337;
const app                           = express();

/*
 *   CONFIG
 */
require("./config/index.js")(app);

/*
 *   ROUTES
 */

const routes                  = require("./routes/index.js");
app.use("/", routes);

/*
 *   START SERVER
 */

app.listen(port, () => {
  console.log(`working on ${port}`);
});
