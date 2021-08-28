const mysql = require('mysql2')
require('dotenv').config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env


const objectConnection = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
}

const db_connection = mysql.createConnection(objectConnection)

module.exports = db_connection