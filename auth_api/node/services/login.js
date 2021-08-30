require('dotenv').config()
const { SECRET } = process.env
const jwt = require("jsonwebtoken")
const crypto = require('crypto')
// db conections
const util = require('util')
const db_connection = require('../database/connection')
const query = util.promisify(db_connection.query).bind(db_connection)

export const loginFunction = async (username, password) => {
  try{
    // save query result
    let userDB = await query(`SELECT username, salt, role FROM users WHERE username = '${username}'`)
    // save user and salt
    const saltDB = userDB[0].salt
    
    const encryptPasword = crypto.createHash('sha512').update(password + saltDB).digest('hex')
    //compare password with passwordDB
    let getMatchData = await query(`SELECT username, role FROM users WHERE username = '${username}' AND password = '${encryptPasword}'`)

    if (getMatchData.length > 0){
      // create Token
      const payload = {username, password}
      const token = jwt.sign(payload, SECRET)
      return token
    }
    return null   
  } catch(err){
    console.log(`this is ${err}`)
  } 
}
