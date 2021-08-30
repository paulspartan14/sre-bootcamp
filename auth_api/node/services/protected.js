require('dotenv').config()
const jwt = require("jsonwebtoken")
const { SECRET } = process.env

export const protectFunction = (authorization) => {
  try {
    const verifyUser = jwt.verify(authorization, SECRET)
    if (verifyUser) {
      return "welcome! this is a protected route"
    }
    return null
  } catch (err) {
    console.log(`this is ${err}`)
    return null
  }
}
