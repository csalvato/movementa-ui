import React from 'react'
import { storiesOf, addDecorator } from '@kadira/storybook'
import { SearchForm } from 'components'
import backgroundColor from 'react-storybook-decorator-background';


storiesOf('SearchForm', module)
  .add('vertical', () =>
    <SearchForm />
  )
  .addDecorator(backgroundColor(['#303F9F', '#000000', '#ffffff']))
  .add('horizontal', () =>
    <SearchForm horizontal={true} />
  )
