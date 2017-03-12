import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultsPage } from 'components'

storiesOf('SearchResultsPage', module)
  .add('default', () => (
    <SearchResultsPage />
  ))
