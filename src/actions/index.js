export const updateSearchQuery = (query) => ({
  type: 'UPDATE_SEARCH_QUERY',
  query
})
export const updateAutocompleteItems = (autocompleteItems, json) => ({
  type: 'UPDATE_AUTOCOMPLETE_ITEMS',
  autocompleteItems
})

export const updateSearchResults = (searchResults, json) => ({
  type: 'UPDATE_SEARCH_RESULTS',
  searchResults
})

// export const invalidateSearchResults = (autocompleteItems) => ({
//   type: 'INVALIDATE_AUTOCOMPLETE_ITEMS',
//   autocompleteItems
// })
//
// export const requestSearchResults = (searchResults) => ({
//   type: 'REQUEST_SEARCH_RESULTS',
//   searchResults
// })
//
// export const receiveSearchResults = (searchResults, json) => ({
//   type: 'RECEIVE_SEARCH_RESULTS',
//   searchResults,
//   posts: json.data.children.map(child => child.data),
//   receivedAt: Date.now()
// })


// Example State Tree
// {
//   query: "11234",
//   autocompleteItems: [ "11234 Brooklyn, NY", "Hello 11234 World"],
//   searchResults: {
//     isFetching: false,
//     didInvalidate: false,
//     results: [{location: {...}},{location: {...}}]
//   }
// }
