const BasePayload = require('./BasePayload')

class SearchPayload extends BasePayload {
  operation = 'SearchQuery'

  createPayload(query, first, after = null) {
    return {
      operationName: this.operation,
      query: this.query,
      variables: {
        query,
        first,
        after
      }
    }
  }
}

module.exports = new SearchPayload