import { combineReducers } from 'redux'
import query from './query'
import autocompleteItems from './autocompleteItems'
import searchResults from './searchResults'
import { routerReducer } from 'react-router-redux'

const searchApp = combineReducers({
  query,
  autocompleteItems,
  searchResults,
  router: routerReducer
})

export default searchApp;
