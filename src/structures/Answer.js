const Base = require('./Base')
const User = require('./User')

class Answer extends Base {
  constructor(client, data) {
    super(client)

    this._patch(data)
  }

  _patch(data) {
    if (typeof data !== 'object')
      return 

    this.author = new User(this._client, data?.author)
    this.thanksCount = data?.thanksCount
    this.ratesCount = data?.ratesCount
    this.rating = data?.rating
    this.content = data?.content
  }
}

module.exports = Answer