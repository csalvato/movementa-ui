import React from 'react'
import { storiesOf, addDecorator } from '@kadira/storybook'
import { SearchForm } from 'components'
import backgroundColor from 'react-storybook-decorator-background';
import { storeWithEmptyState } from 'configureStore'
import { Provider } from 'react-redux'

storiesOf('SearchForm', module)
  .add('vertical', () =>
    <Provider store={storeWithEmptyState}>
      <SearchForm/>
    </Provider>
  )
  .addDecorator(backgroundColor(['#303F9F', '#000000', '#ffffff']))
  .add('horizontal', () =>
    <Provider store={storeWithEmptyState}>
      <SearchForm horizontal />
    </Provider>
  )
