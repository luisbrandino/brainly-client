const servers = require('./servers')
const { DEFAULT_QUESTIONS_PER_REQUEST, MAX_QUESTIONS_PER_REQUEST, MIN_QUESTIONS_PER_REQUEST } = require('./constants')

class Client {
  config = {
    server: servers.DEFAULT
  }

  constructor(config = {}) {
    if (typeof config !== 'object')
      throw new Error('Parameter must be an object')

    config.server = servers[config.server] ?? this.config.server

    Object.assign(this.config, config)
  }

  async search(params) {
    if (typeof params == 'string') {
      params = {
        query: params
      }
    }

    params.first = params.first ?? DEFAULT_QUESTIONS_PER_REQUEST
    params.first = parseInt(params.first)

    if (isNaN(params.first))
      throw new Error('Parameter \'first\' must be a Number')

    if (params.first < MIN_QUESTIONS_PER_REQUEST || params.first > MAX_QUESTIONS_PER_REQUEST)
      throw new Error('Parameter \'first\' must be between 1 and 100')

    params.after = parseInt(params.after)

    if (isNaN(params.after) || params.after < 1)
      params.after = null

    if (params.after) 
      params.after = Buffer.from(`cursor:${params.after}`).toString('base64')

    return await this._request({ action: 'search', params })
  }

  async _request({ action, params }) {
    action = require(`./actions/${action}`)

    if (typeof action !== 'function')
      throw new Error('Invalid action')

    return await action(this, params)
  }
}

module.exports = Client