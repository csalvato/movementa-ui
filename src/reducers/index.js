import { combineReducers } from 'redux'
import query from './query'
import autocompleteItems from './autocompleteItems'

const searchApp = combineReducers({
  query,
  autocompleteItems
})

export default searchApp;
