const express = require("express");
const router = express.Router();
const { updateDetails } = require("../controllers/updatePeople");
const { getAadhar ,getId} = require("../controllers/query");
const { isSignedIn } = require("../controllers/auth");

//params
router.param("aadhar", getAadhar);
router.param("id", getId);

//update
router.put("/update/:id", updateDetails);

module.exports = router;
