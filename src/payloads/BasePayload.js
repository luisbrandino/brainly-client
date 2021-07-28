const { readFileSync } = require('fs')

class BasePayload {
  get query() {
    if (this._query)
      return this._query

    this._query = require('../queries/SearchQuery')
    return this._query
  }
}

module.exports = BasePayload