import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppBarHeader } from 'components'
import { Provider } from 'react-redux'
import { storeWithEmptyState } from 'configureStore'

storiesOf('AppBarHeader', module)
  .add('default', () => (
    <Provider store={storeWithEmptyState}>
      <AppBarHeader />
    </Provider>
  ))
