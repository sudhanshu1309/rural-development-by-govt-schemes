const client = require("../database");

//get all schemes
exports.getSchemes = (req, res) => {
  client.query(`SELECT * FROM govt_schemes`, (err, schemes) => {
    if (err) {
      // console.log(err);
      return res.status(400).json({
        message: "schemes not found!",
      });
    }
    return res.json(schemes.rows);
  });
};
