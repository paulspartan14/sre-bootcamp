import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization

  const getProtectedRoute = protectFunction(authorization)

  getProtectedRoute ? res.send({"data": getProtectedRoute}) : res.status(403).send({"data": "You are not allowed access"})

  next()
}
