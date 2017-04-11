import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '.'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to update the search query', () => {
    const query = 'foobar'
    const expectedAction = {
      type: actions.UPDATE_SEARCH_QUERY,
      query
    }
    expect(actions.updateSearchQuery(query)).toEqual(expectedAction)
  })

  it('should create an action to update the autocompleteItems', () => {
    const autocompleteItems = ['foo', 'bar', 'baz']
    const expectedAction = {
      type: actions.UPDATE_AUTOCOMPLETE_ITEMS,
      autocompleteItems
    }
    expect(actions.updateAutocompleteItems(autocompleteItems)).toEqual(expectedAction)
  })

  it('should create an action to update the searchResults', () => {
    const query = 'foobar'
    const results = '[{ "id": 1, "name": "foo"}, { "id": 2, "name": "bar"}]'
    const expectedAction = {
      type: actions.UPDATE_SEARCH_RESULTS,
      query,
      results
    }
    expect(actions.updateSearchResults(query, results)).toEqual(expectedAction)
  })

  it('should create an action to request search results', () => {
    const query = 'foobar'
    const expectedAction = {
      type: actions.REQUEST_SEARCH_RESULTS,
      query
    }
    expect(actions.requestSearchResults(query)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates UPDATE_SEARCH_RESULTS when fetching search results has been done', () => {
    const query = 'foo bar baz'
    const responseArray = [{ "id": 1, "foo_bar": "foo"}, { "id": 2, "foo_bar": "bar"}]
    const expectedResults = [{ "id": 1, "fooBar": "foo"}, { "id": 2, "fooBar": "bar"}]
    // TODO: Replace API Key and API domain with env variables.
    nock("http://localhost:5000")
      .get(`/v1/entries?q=${encodeURIComponent(query)}`)
      .reply(200, responseArray)

    const expectedActions = [
      { type: actions.REQUEST_SEARCH_RESULTS, query },
      { type: actions.UPDATE_SEARCH_RESULTS, query, results: expectedResults }
    ]
    const store = mockStore()

    return store.dispatch(actions.fetchSearchResults(query))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})
