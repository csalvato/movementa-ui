// const initialState = { isFetching: false,
//                        didInvalidate: false,
//                        results: []
//                      }

const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return action.searchResults
    default:
      return state
  }
}

export default autocompleteItems;
