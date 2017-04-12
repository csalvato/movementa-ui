import fetch from 'isomorphic-fetch'
import jsonStyleConverter from 'json-style-converter'

export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY'
export const UPDATE_AUTOCOMPLETE_ITEMS = 'UPDATE_AUTOCOMPLETE_ITEMS'
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'

export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  query
})

export const updateAutocompleteItems = (autocompleteItems, json) => ({
  type: UPDATE_AUTOCOMPLETE_ITEMS,
  autocompleteItems
})

export function updateSearchResults(query, json) {
  return {
    type: UPDATE_SEARCH_RESULTS,
    query,
    results: json
  }
}

export function requestSearchResults(query) {
  return {
    type: REQUEST_SEARCH_RESULTS,
    query
  }
}

export function fetchSearchResults(query) {
  let headers = new Headers();
  headers.append("X-Api-Key", `${process.env.REACT_APP_MOVEMENTA_API_KEY}`);
  const options = { headers: headers };
  return dispatch => {
    dispatch(requestSearchResults(query))
    return fetch(`${process.env.REACT_APP_MOVEMENTA_API_HOST}/v1/entries?q=${encodeURIComponent(query)}`, options)
      .then(response => response.json())
      .then(json => {
        json = jsonStyleConverter.snakeToCamelCase(json)
        dispatch(updateSearchResults(query, json))
      })
  }
}
