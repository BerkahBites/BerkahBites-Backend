const mySql = require("mysql2");
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "BerkahBites",
});

module.exports = db;
