const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "", //CHANGE TO YOUR PASSWORD
  host: "localhost",
  port: 5432,
  database: "twocentadvice"
})

module.exports = pool