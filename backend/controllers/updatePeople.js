const client = require("../database");

//update details
exports.updateDetails = (req, res) => {
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

  const schemes = `{${schemasEnrolled}}`;
  // console.log(aadhar);
  // console.log(req.body);

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
      schemes,
    ],
    (err, people) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Unable to update the data",
        });
      }
      // console.log("RESULT" + JSON.stringify(people));
      return res.json({
        error: "Saved successfully!",
      });
    }
  );
};
