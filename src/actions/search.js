const axios = require('axios')
const searchPayload = require('../payloads/SearchPayload')
const { convertQuestions } = require('../utils/DataConverter')

const search = async (client, { query, first, after = null }) => {
  const payload = searchPayload.createPayload(query, first, after)
  const { server } = client.config
  const result = await axios.post(`${server.url}${server.api}`, payload)

  return convertQuestions(client, result.data.data.questionSearch.edges)
}

module.exports = search