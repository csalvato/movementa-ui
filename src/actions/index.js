import fetch from 'isomorphic-fetch'

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

export function fetchSearchResults(query) {
  let headers = new Headers();
  headers.append("X-Api-Key", "FzM9QjNHMjzk4YIBsrYGhQtt");
  const options = { headers: headers };
  const request = new Request(`http://localhost:5000/v1/entries?q=${encodeURIComponent(query)}`, options);

  return dispatch => {
    dispatch(requestSearchResults(query))
    return fetch(request)
      .then(response => response.json())
      .then(json => {
        json = json.map((result) => (convertKeysToSnakeCase(result)))
        dispatch(updateSearchResults(query, json))
      })
  }
}

function updateSearchResults(query, json) {
  return {
    type: UPDATE_SEARCH_RESULTS,
    query,
    results: json
  }
}

function requestSearchResults(query) {
  return {
    type: REQUEST_SEARCH_RESULTS,
    query
  }
}

function convertKeysToSnakeCase(json) {
  //Convert json snake_case keys to camelCase
  let newJson = {}
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      let newKey = key.replace(/(_\w)/g, (string) => {return string[1].toUpperCase();});
      newJson[newKey] = json[key]
    }
  }
  return newJson;
}
