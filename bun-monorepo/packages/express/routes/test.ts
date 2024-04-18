import express from "express";

const router = express.Router();

// this is purely for testing
router.get("/", async (req, res) => {
  res.json([
    { id: 123213, name: "Sam Samson" },
    { id: 45343543, name: "Paul Ramierez" },
    { id: 678678678687, name: "Dave Davidson" },
  ]);
});

export default router;
