import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultsPage } from 'components'
import AppTemplate from '../../templates/AppTemplate/AppTemplate'

storiesOf('SearchResultsPage', module)
  .add('standalone', () => (
    <SearchResultsPage />
  ))
  .add('embedded', () => (
    <AppTemplate>
      <SearchResultsPage />
    </AppTemplate>
  ))
