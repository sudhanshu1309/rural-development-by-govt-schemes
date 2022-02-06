const express = require("express");
const router = express.Router();
const { getSchemes } = require("../controllers/schemes");
const { isSignedIn } = require("../controllers/auth");

//get all schemes
router.get("/schemes", getSchemes);

module.exports = router;
