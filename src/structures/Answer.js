const Author = require('../structures/Author')

class Answer {
  constructor(data) {
    if (typeof data !== 'object')
      return 

    this.author = new Author(data?.author)
    this.thanksCount = data?.thanksCount
    this.ratesCount = data?.ratesCount
    this.rating = data?.rating
    this.content = data?.content
  }
}

module.exports = Answer