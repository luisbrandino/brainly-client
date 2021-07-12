const Base = require('./Base')
const User = require('./User')
const { convertAnswers } = require('../utils/DataConverter')

class Question extends Base {
  constructor(client, data) {
    super(client)

    this._patch(data)
  }

  _patch(data) {
    if (typeof data !== 'object')
      return

    this.id = data?.id
    this.content = data?.content
    this.hasVerified = data?.answers?.hasVerified

    if ('author' in data) {
      this.author = new User(this._client, data?.author)
    } else {
      this.author = null
    }

    if ('answers' in data) {
      this.answers = convertAnswers(this._client, data.answers?.nodes)
    } else {
      this.answers = []
    }
  }
}

module.exports = Question