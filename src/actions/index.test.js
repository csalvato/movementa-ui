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
    const expectedPageTitle = 'Adult Gymnastics near foo bar baz'
    nock(process.env.REACT_APP_MOVEMENTA_API_HOST)
      // Not working due to known issue in nock
      // .matchHeader('X-Api-Key', process.env.REACT_APP_MOVEMENTA_API_KEY)
      .get(`/v1/entries?q=foo%20bar%20baz`)
      .reply(200, responseArray)

    const expectedActions = [
      { type: actions.REQUEST_SEARCH_RESULTS, query },
      { type: actions.UPDATE_SEARCH_RESULTS, query, results: expectedResults },
      { type: actions.UPDATE_PAGE_TITLE, pageTitle: expectedPageTitle }
    ]
    const store = mockStore()
    return store.dispatch(actions.fetchSearchResults(query))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates UPDATE_AUTOCOMPLETE_ITEMS w/predictions when fetching query predictions', () => {
    const query = '11234'
    const predictionDescription = '11234 Brooklyn, NY, United States'
    const autocompleteItems = [predictionDescription]

    const expectedActions = [
      { type: actions.UPDATE_SEARCH_QUERY, query },
      { type: actions.UPDATE_AUTOCOMPLETE_ITEMS, autocompleteItems }
    ]

    // Mock out what I am using from the google API
    function AutocompleteServiceConstructor(){
      return {getPlacePredictions: jest.fn((options, callback) => {
          const status = 'OK'
          const predictions = [{description: predictionDescription}]
          callback(predictions, status)
        })}
    }
    window.google = {
      maps: {
        places: {
          AutocompleteService: AutocompleteServiceConstructor,
          PlacesServiceStatus: {
            OK: 'OK'
          }
        }
      }
    }
    const store = mockStore()
    return store.dispatch(actions.fetchQueryPredictions(query))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates UPDATE_AUTOCOMPLETE_ITEMS w/no predictions when error in fetching query predictions', () => {
    const query = '11234'
    const autocompleteItems = []

    const expectedActions = [
      { type: actions.UPDATE_SEARCH_QUERY, query },
      { type: actions.UPDATE_AUTOCOMPLETE_ITEMS, autocompleteItems }
    ]

    // Mock out what I am using from the google API
    function AutocompleteServiceConstructor(){
      return {getPlacePredictions: jest.fn((options, callback) => {
          const status = 'ZERO_RESULTS'
          const predictions = "foobar"
          callback(predictions, status)
        })}
    }
    window.google = {
      maps: {
        places: {
          AutocompleteService: AutocompleteServiceConstructor,
          PlacesServiceStatus: {
            OK: 'OK'
          }
        }
      }
    }
    const store = mockStore()
    return store.dispatch(actions.fetchQueryPredictions(query))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

})
