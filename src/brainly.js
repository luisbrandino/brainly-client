const servers = require('./servers')
const { DEFAULT_QUESTIONS_PER_REQUEST, MAX_QUESTIONS_PER_REQUEST } = require('./constants')

class BrainlyAPI {
  config = {
    server: servers.DEFAULT
  }

  constructor(config = {}) {
    if (typeof config !== 'object') 
      throw new Error('Parameter must be an object')
    
    config.server = servers[config.server.toUpperCase()] ?? this.config.server

    Object.assign(this.config, config)
  }

  async search(params) {
    if (typeof params == 'string') {
      params = {
        query: params
      }
    }

    params.first = params.first ?? DEFAULT_QUESTIONS_PER_REQUEST

    if (params.first > MAX_QUESTIONS_PER_REQUEST)
      throw new Error('Parameter \'First\' can\'t be longer than 100')

    return await this._request({ action: 'search', params })
  }

  async _request({ action, params }) {
    action = require(`./actions/${action}`)

    if (typeof action !== 'function')
      throw new Error('Invalid action')

    params.server = this.config.server

    return await action(params)
  }
}

module.exports = BrainlyAPI