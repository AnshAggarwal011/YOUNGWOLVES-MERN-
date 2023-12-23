const express = require("express");
const router = express.Router();

router.post("/hoodiesData", (req, res) => {
  try {
    res.send([global.hoodies, global.hoodietype]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
