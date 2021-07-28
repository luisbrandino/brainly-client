const Client = require('brainly-client')

describe('Testing SearchPayload', () => {
  const SearchPayload = require('../src/payloads/SearchPayload')
  const payload = SearchPayload.createPayload('Test', 5)

  it('Should be an object', () => {
    expect(typeof payload).toBe('object')
  })

  it('Should have operationName property', () => {
    expect(payload).toHaveProperty('operationName')
  })

  it('Should have query property', () => {
    expect(payload).toHaveProperty('query')
  })

  it('Should have variables property', () => {
    expect(payload).toHaveProperty('variables')
  })

  it('Should have the correct operationName', () => {
    const expectedOperationName = 'SearchQuery'

    expect(payload.operationName).toBe(expectedOperationName)
  })

  it('Should have the correct query', () => {
    const expectedQuery = require('../src/queries/SearchQuery')

    expect(payload.query).toBe(expectedQuery)
  })

  it('Should have the correct variables', () => {
    const expectedVariables = {
      query: 'Test',
      first: 5,
      after: null
    }

    expect(payload.variables).toEqual(expectedVariables)
  })

})