const { validationResult } = require("express-validator");
const client = require("../database");

//get detail with aadhar
exports.getDetails = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Invalid aadhar no.",
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
      // console.log(err);
      // console.log(people.rows.length);
      if (err || people.rows.length === 0) {
        return res.status(400).json({
          error: "aadhar not found!",
        });
      }
      //   console.log(people.rows[0]);
      req.people = people.rows[0];
      next();
    }
  );
};
