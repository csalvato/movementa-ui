import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultsPage } from 'components'
import AppTemplate from '../../templates/AppTemplate/AppTemplate'

storiesOf('SearchResultsPage', module)
  .add('embedded', () => (
    <AppTemplate>
      <SearchResultsPage />
    </AppTemplate>
  ))
  .add('standalone', () => (
      <SearchResultsPage />
    ))
