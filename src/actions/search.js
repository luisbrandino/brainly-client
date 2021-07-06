const axios = require('axios')
const SearchQuery = require('../queries/SearchQuery')
const { convertQuestions } = require('../utils/DataConverter')

const search = async ({ server, query, first, after = null }) => {
  const data = {
    operationName: 'SearchQuery',
    query: SearchQuery,
    variables: {
      query,
      first,
      after
    }
  }

  const result = await axios.post(`${server.url}${server.api}`, data)

  return convertQuestions(result.data.data.questionSearch.edges)
}

module.exports = search