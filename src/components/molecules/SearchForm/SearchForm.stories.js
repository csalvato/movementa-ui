import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchForm } from 'components'

storiesOf('SearchForm', module)
  .add('default', () => (
    <SearchForm />
  ))
