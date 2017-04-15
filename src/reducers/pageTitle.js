const pageTitle = (state = 'Movementa Gym Directory', action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_TITLE':
      return action.pageTitle
    default:
      return state
  }
}

export default pageTitle;
