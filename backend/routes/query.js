const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { getDetails, getAadhar } = require("../controllers/query");
const { isSignedIn } = require("../controllers/auth");

//params
router.param("aadhar", getAadhar);

//query with aadhar
router.get(
  "/details/:aadhar",
  [
    check("aadhar")
      .isLength({ min: 12, max: 12 })
      .withMessage("Invalid Aadhar no."),
  ],
  getDetails
);
router.get(
  "/details/",
  [
    check("aadhar")
      .isLength({ min: 12, max: 12 })
      .withMessage("Invalid Aadhar no."),
  ],
  getDetails
);

module.exports = router;
