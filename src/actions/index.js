import fetch from 'isomorphic-fetch'
import jsonStyleConverter from 'json-style-converter'

export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY'
export const UPDATE_AUTOCOMPLETE_ITEMS = 'UPDATE_AUTOCOMPLETE_ITEMS'
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'
export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'
export const UPDATE_PAGE_TITLE = 'UPDATE_PAGE_TITLE'

export const updatePageTitle = (pageTitle) => ({
  type: UPDATE_PAGE_TITLE,
  pageTitle
})

export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  query
})

export const updateAutocompleteItems = (autocompleteItems) => ({
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
        dispatch(updatePageTitle(`Adult Gymnastics near ${query}`))
      })
  }
}

export function fetchQueryPredictions(query) {
  return dispatch => {
    dispatch(updateSearchQuery(query))
    return getPlacePredictions(query)
            .then(predictions => {
              let predictionsArray = predictions.map((p, idx) => (p.description))
              dispatch(updateAutocompleteItems(predictionsArray))
            })
            .catch(function(status) {
              dispatch(updateAutocompleteItems([]))
            })
  }
}

function getPlacePredictions(query) {
  // Turn place predictions into an ES6 Promise (easier to understand)
  return new Promise(function(resolve,reject) {
    const autocompleteService = new window.google.maps.places.AutocompleteService()
    const okStatus = window.google.maps.places.PlacesServiceStatus.OK
    const autoCompleteOptions = { types: ['geocode'] } // only return geocoding results, not business names
    const callback = (predictions, status) => {
        if (status !== okStatus) {
          reject(status)
        } else {
          resolve(predictions)
        }
      }
    autocompleteService.getPlacePredictions({ ...autoCompleteOptions , input: query }, callback)
  })
}
