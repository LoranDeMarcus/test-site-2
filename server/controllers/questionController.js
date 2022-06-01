const { Question } = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionController {
  async create(req, res, next) {
    try {
      const { name, chapter, answers, rightAnswers } = req.body
      const question = await Question.create({
        name,
        chapter,
        answers,
        rightAnswers
      })

      return res.json(question)
    } catch (err) {
      next(ApiError.badRequest(err))
    }
  }

  async getAll(req, res) {
    const questions = await Question.findAll()

    return res.json(questions)
  }

  async getOne(req, res) {

  }

  async delete(req, res) {

  }
}


module.exports = new QuestionController()
