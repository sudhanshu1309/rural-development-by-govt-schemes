const client = require("../database");

//update details
exports.updateDetails = (req, res) => {
  const {
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

  const { aadhar } = req.params;
  //   console.log(aadhar);

  //saving in database
  client.query(
    `UPDATE people SET 
            aadhar = $1,
            name = $2,
            dob = $3,
            gender = $4,
            spouse_name = $5,
            no_of_children = $6,
            annual_income = $7,
            mob_no = $8,
            email = $9,
            address = $10,
            schemes_enrolled = $11
            WHERE aadhar = $1`,
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
      schemasEnrolled,
    ],
    (err, people) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Unable to save the data",
        });
      }
      // console.log("RESULT" + JSON.stringify(people));
      return res.json({
        message: "Saved successfully!",
      });
    }
  );
};
