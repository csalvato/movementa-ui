const initialState = { isFetching: false,
                       results: []
                     }

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return Object.assign({}, state, {
        isFetching: false,
        results: action.results
      })
    case 'REQUEST_SEARCH_RESULTS':
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state
  }
}

export default searchResults;
