import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'redux'
import ConnectedSearchResultsPage,
       { SearchResultsPage } from './SearchResultsPage'

import { storeWithEmptyState } from 'configureStore'

const store = storeWithEmptyState

it('renders', () => {
  shallow( <SearchResultsPage/>)
})
