const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "feelgoodinc1999",
  host: "localhost",
  port: 5432,
  database: "DB_LAB_2",
});

module.exports = pool;
