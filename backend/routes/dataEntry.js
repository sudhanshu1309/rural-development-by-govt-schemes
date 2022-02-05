const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { isSignedIn } = require("../controllers/auth");

const { submitData } = require("../controllers/dataEntry");

//submit data
router.post(
  "/submit",
  [
    check("aadhar")
      .isLength({ min: 12, max: 12 })
      .withMessage("Invalid Aadhar no."),
  ],
  isSignedIn,
  submitData
);

module.exports = router;
