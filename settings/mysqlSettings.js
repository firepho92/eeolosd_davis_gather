const mysql = require('mysql')

const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_DB = process.env.MYSQL_DB

const client = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB
})

module.exports = {
  client
}