const JWT = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.methos === 'OPTIONS') {
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer token

    if (!token) {
      res.status(401).json({ message: 'Не авторизован' })
    }

    req.user = JWT.verify(token, process.env.SECRET_KEY)
    next()
  } catch (err) {
    res.status(401).json({ message: 'Не авторизован' })
  }
}
