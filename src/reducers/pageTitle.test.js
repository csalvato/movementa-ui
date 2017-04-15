import reducer from './pageTitle'
import * as actions from '../actions'

it('should return a default string if state not specified', () => {
  expect(reducer(undefined, {})).toEqual("Movementa Gym Directory")
})

it("should handle UPDATE_PAGE_TITLE", function(){
  const pageTitle = "foobar"
  const action = actions.updatePageTitle(pageTitle)
  expect(reducer(undefined, action)).toEqual(pageTitle)

});
