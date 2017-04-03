const search = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return action.query
    case 'UPDATE_AUTOCOMPLETE_ITEMS':
      return action.autocompleteItems
      case 'UPDATE_SEARCH_RESULTS':
        return action.searchResults
    default:
      return state
  }
}

export default search
