import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username
  let password = req.body.password
  const token = await loginFunction(username, password)

  token ? (res.send({"data": token}) ) : res.status(403).send({ "error": "Invalid Credentials"})
  next()
}
