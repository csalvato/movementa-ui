import reducer from './autocompleteItems'
import * as actions from '../actions'

it('should return an empty array if state not specified', () => {
  expect(reducer(undefined, {})).toEqual([])
})

it("should handle UPDATE_AUTOCOMPLETE_ITEMS", function(){
  const autocompleteItems = ['foo', 'bar', 'baz']
  const action = actions.updateAutocompleteItems(autocompleteItems)
  expect(reducer(undefined, action)).toEqual(autocompleteItems)

});

it("should return the same state when unidentified action provided", function(){
  const providedState = [{foo:'bar'}]
  const action = {type: 'FOOBAR', bar:'baz'}
  expect(reducer(providedState, action)).toEqual(providedState)
});
