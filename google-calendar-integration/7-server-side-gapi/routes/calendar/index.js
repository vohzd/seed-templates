const router                              = require("express").Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const {
  getAllEvents
}                                         = require("../../services/calendar/index.js");

router.get("/calendar", async (req, res) => {
  let query = req.query ? req.query : {};
  try {
    const events = await getAllEvents(query);
    return res.send("HELLO!")
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
