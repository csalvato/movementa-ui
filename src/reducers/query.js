const query = (state = "", action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return action.query
    case 'UPDATE_SEARCH_RESULTS':
      return action.query
    default:
      return state
  }
}

export default query
