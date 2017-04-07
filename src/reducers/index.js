import { combineReducers } from 'redux'
import query from './query'
import autocompleteItems from './autocompleteItems'
import searchResults from './searchResults'

const searchApp = combineReducers({
  query,
  autocompleteItems,
  searchResults
})

export default searchApp;
