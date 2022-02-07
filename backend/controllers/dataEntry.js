const { validationResult } = require("express-validator");
const client = require("../database");

//submit data
exports.submitData = (req, res) => {
  const errors = validationResult(req);
  const {
    aadhar,
    name,
    dob,
    gender,
    spouseName,
    noOfChildren,
    annualIncome,
    mobNo,
    email,
    address,
    schemasEnrolled,
  } = req.body;
  // console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const schemes = `{${schemasEnrolled}}`;
  // console.log("SCHEMAS:  "+ schemes);
  //saving in database
  client.query(
    `INSERT INTO people (
        aadhar,
        name,
        dob,
        gender,
        spouse_name,
        no_of_children,
        annual_income,
        mob_no,
        email,
        address,
        schemes_enrolled
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      aadhar,
      name,
      dob,
      gender,
      spouseName,
      noOfChildren,
      annualIncome,
      mobNo,
      email,
      address,
      schemes,
    ],
    (err, people) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Unable to save the data",
        });
      }
      //   console.log("RESULT" + JSON.stringify(people.rows));
      return res.json({
        error: "Saved successfully!",
      });
    }
  );
};
