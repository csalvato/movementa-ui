import reducer from './searchResults'
import * as actions from '../actions'

const initialState = { isFetching: false,
                       results: []
                     }

it('should return the initial state if state not specified', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it("should return the same state when unidentified action provided", function(){
   const providedState = [{foo:'bar'}]
   const action = {type: 'FOOBAR', results:{}}
   expect(reducer(providedState, action)).toEqual(providedState)
});

it("should handle UPDATE_SEARCH_RESULTS", function(){
  const query = "foobar"
  const results = [{foo:'bar'},{foo:'baz'}]
  const expectedState = {
    isFetching: false,
    results
  }
  const action = actions.updateSearchResults(query, results)
  expect(reducer(undefined, action)).toEqual(expectedState)
});

it("should handle REQUEST_SEARCH_RESULTS", function(){
  const expectedState = {
    isFetching: true,
    results: []
  }
  const action = actions.requestSearchResults(undefined)
  expect(reducer(undefined, action)).toEqual(expectedState)
});
