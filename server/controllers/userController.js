const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User, UserResult } = require('../models/models')
const generateJWT = require('../utils/generateJWT')

class UserController {
  async registration(req, res, next) {
    const {
      login, password, name, lastName, middleName, department, course
    } = req.body

    if (!login || !password) {
      return next(ApiError.badRequest('Некорректный login или password'))
    }

    if (!name || !lastName || !middleName) {
      return next(ApiError.badRequest('Введите ФИО'))
    }

    if (!department) {
      return next(ApiError.badRequest('Введите факультет'))
    }

    const candidate = await User.findOne({ where: { login } })

    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким login уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({
      login,
        password: hashPassword,
        name,
        lastName,
        middleName,
        department,
        course
      })
    console.log(user)
    const userResult = UserResult.create({ userId: user.id })

    const token = generateJWT(user.id, user.login, user.course)

    return res.json({ token })
  }

  async login(req, res, next) {
    const { login, password } = req.body
    const user = await User.findOne({ where: { login } })

    if (!user) {
      return next(ApiError.internal('Пользователь с таким именем не найден'))
    }

    const comparePassword = bcrypt.compareSync(password, user.password)

    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }

    const token = generateJWT(user.id, user.login, user.course)
    return res.json({ token })
  }

  async authCheck(req, res, next) {
    const token = generateJWT(req.user.id, req.user.login, req.user.course)
    return res.json({ token })
  }
}


module.exports = new UserController()
