const { readFileSync } = require('fs')

class BasePayload {
  get query() {
    if (this._query)
      return this._query

    this._query = readFileSync(`${process.cwd()}/src/queries/${this.operation}.graphql`).toString('utf-8')
    return this._query
  }
}

module.exports = BasePayload