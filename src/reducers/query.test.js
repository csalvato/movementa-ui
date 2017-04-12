import reducer from './query'
import * as actions from '../actions'

it('should return an empty string if state not specified', () => {
  expect(reducer(undefined, {})).toEqual("")
})

it("should handle UPDATE_SEARCH_QUERY", function(){
  const query = "foobar"
  const action = actions.updateSearchQuery(query)
  expect(reducer(undefined, action)).toEqual(query)
});

it("should handle UPDATE_SEARCH_RESULTS", function(){
  const query = "foobar"
  const action = actions.updateSearchResults(query)
  expect(reducer(undefined, action)).toEqual(query)
});

it("should handle REQUEST_SEARCH_RESULTS", function(){
  const query = "foobar"
  const action = actions.requestSearchResults(query)
  expect(reducer(undefined, action)).toEqual(query)
});

it("should return the same state when unidentified action provided", function(){
  const providedState = [{foo:'bar'}]
  const action = {type: 'FOOBAR', query:'baz'}
  expect(reducer(providedState, action)).toEqual(providedState)
});
