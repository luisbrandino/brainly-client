const Base = require('./Base')

class User extends Base {
  constructor(client, data) {
    super(client)

    this._patch(data)
  }

  _patch(data) {
    if (typeof data !== 'object') 
      return

    this.id = data?.id
    this.nick = data?.nick
    this.avatar = data?.avatar?.thumbnailUrl ?? null
    this.isDeleted = data?.isDeleted
    this.rank = data?.rank
  }
}

module.exports = User