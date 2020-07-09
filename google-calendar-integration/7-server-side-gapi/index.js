/*
 * DEPS
 */
const express                       = require("express");
const port                          = (process.env.PORT || 1337);
const app                           = express();

/*
 *   CONFIG
 */
require("./config/server.js")(app);

/*
 *   ROUTES
 */
const calendarRoutes                 = require("./routes/calendar/index.js");

app.use("/", calendarRoutes);

/*
 *   START SERVER
 */

app.listen(port, () => {
  console.log(`working on ${port}`);
});
