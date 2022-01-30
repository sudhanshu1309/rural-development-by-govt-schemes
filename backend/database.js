const { Client } = require("pg");
require("dotenv").config();

const conString = process.env.URI;
const client = new Client(conString);
client.connect((err) => {
  if (err) {
    return console.error("CONNECTION FAILED", JSON.stringify(err));
  } else {
    console.log("DATABASE CONNECTED");
  }
  //   client.query('SELECT NOW() AS "theTime"', function (err, result) {
  //     if (err) {
  //       return console.error("error running query", err);
  //     }
  //     console.log(result.rows[0].theTime);
  // client.end();
  //   });
});

module.exports = client;
