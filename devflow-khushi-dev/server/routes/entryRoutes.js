const router = require("express").Router();
const Entry = require("../models/Entry");

// create / update daily entry
router.post("/", async (req, res) => {
  const entry = await Entry.findOneAndUpdate(
    { date: req.body.date },
    req.body,
    { upsert: true, new: true }
  );
  res.json(entry);
});

// get all entries
router.get("/", async (req, res) => {
  const entries = await Entry.find().sort({ date: -1 });
  res.json(entries);
});

module.exports = router;
