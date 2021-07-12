class Base {
  constructor(client) {
    Object.defineProperty(this, '_client', { 
      value: client, 
      writable: false, 
      enumerable: false 
    })
  }
}

module.exports = Base