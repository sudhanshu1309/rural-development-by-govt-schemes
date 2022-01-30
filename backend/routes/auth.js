const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signin, signout } = require("../controllers/auth");

//signin
router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is required!"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password should be min of 6 char"),
  ],
  signin
);

//signout
router.get("/signout", signout);

module.exports = router;
