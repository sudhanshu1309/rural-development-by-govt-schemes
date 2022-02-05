const { validationResult } = require("express-validator");
const client = require("../database");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
require("dotenv").config();

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout successfully!",
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  client.query(
    `SELECT * FROM dbauser WHERE email = $1`,
    [email],
    (err, user) => {
      if (err || !user.rows[0]) {
        // console.log(JSON.stringify(err));
        return res.status(400).json({
          error: "user not found!",
        });
      }
      //   console.log(user.rows[0]);

      if (password !== user.rows[0].password) {
        return res.status(400).json({
          error: "password doesn't match",
        });
      }
      if (email === user.rows[0].email && password === user.rows[0].password) {
        //create token
        const token = jwt.sign(
          { email: user.rows[0].email },
          process.env.SECRET
        );

        //put token in cookie
        res.cookie("token", token, { expire: new Date() + 9999 });

        //send response to front end
        const { name, email, role } = user.rows[0];
        return res.json({
          token,
          user: {
            name,
            email,
            role,
          },
        });
      }
    }
  );
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
