const express = require("express");
const router = express.Router();
const { updateDetails } = require("../controllers/updatePeople");
const { getAadhar } = require("../controllers/query");
const { isSignedIn } = require("../controllers/auth");

//params
router.param("aadhar", getAadhar);

//update
router.put("/update/:aadhar", isSignedIn, updateDetails);

module.exports = router;
