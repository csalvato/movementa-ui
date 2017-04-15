import { combineReducers } from 'redux'
import query from './query'
import autocompleteItems from './autocompleteItems'
import searchResults from './searchResults'
import pageTitle from './pageTitle'
import { routerReducer } from 'react-router-redux'

const searchApp = combineReducers({
  query,
  autocompleteItems,
  searchResults,
  pageTitle,
  router: routerReducer
})

export default searchApp;
