class Author {
  constructor(data) {
    if (typeof data !== 'object') 
      return

    this.id = data?.id
    this.nick = data?.nick
    this.avatar = data?.avatar?.thumbnailUrl
    this.isDeleted = data?.isDeleted
    this.rank = data?.rank
  }
}

module.exports = Author