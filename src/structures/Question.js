const { convertAnswers } = require('../utils/DataConverter')
const Author = require('../structures/Author')

class Question {
  constructor(data) {
    if (typeof data !== 'object')
      return

    this.id = data?.id
    this.content = data?.content
    this.hasVerified = data?.answers.hasVerified
    this.author = new Author(data?.author)
    this.answers = convertAnswers(data?.answers?.nodes)
  }
}

module.exports = Question