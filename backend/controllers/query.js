const { validationResult } = require("express-validator");
const client = require("../database");

//get detail with aadhar
exports.getDetails = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Invalid aadhar no.",
    });
  }
  //   console.log(req.people);
  return res.json(req.people);
};

exports.getAadhar = (req, res, next, aadhar) => {
  client.query(
    `SELECT * FROM people WHERE aadhar = $1`,
    [aadhar],
    (err, people) => {
      if (err) {
        return res.status(400).json({
          message: "aadhar not found!",
        });
      }
      //   console.log(people.rows[0]);
      req.people = people.rows[0];
      next();
    }
  );
};
