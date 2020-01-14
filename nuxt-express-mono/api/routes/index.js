const express                             = require("express");

const router                              = express.Router();

router.get("/", async (req, res, next) => {
  res.send({
    "message": "hello world"
  });
});

module.exports = router;
