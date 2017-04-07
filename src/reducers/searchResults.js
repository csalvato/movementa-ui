const initialState = { isFetching: false,
                       results: []
                     }

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return action.searchResults
    default:
      return state
  }
}

export default searchResults;
