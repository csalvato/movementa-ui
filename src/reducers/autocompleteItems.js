const autocompleteItems = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_AUTOCOMPLETE_ITEMS':
      return action.autocompleteItems
    default:
      return state
  }
}

export default autocompleteItems;
