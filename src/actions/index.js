export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY'
export const UPDATE_AUTOCOMPLETE_ITEMS = 'UPDATE_AUTOCOMPLETE_ITEMS'
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  query
})
export const updateAutocompleteItems = (autocompleteItems, json) => ({
  type: UPDATE_AUTOCOMPLETE_ITEMS,
  autocompleteItems
})

export function fetchSearchResults(query) {
  return dispatch => {
    dispatch(requestPosts(query))
    return fetch(`movement-api/${query}.json`)
      .then(response => response.json())
      .then(json => dispatch(updateSearchResults(query, json)))
  }
}

function updateSearchResults(query, json) {
  return {
    type: UPDATE_SEARCH_RESULTS,
    query,
    searchResults: json.data.children.map(child => child.data)
  }
}

function requestPosts(query) {
  return {
    type: REQUEST_POSTS,
    query
  }
}
