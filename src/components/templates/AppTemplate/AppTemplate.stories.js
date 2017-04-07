import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppTemplate } from 'components'
import { Provider } from 'react-redux'
import { storeWithEmptyState } from 'configureStore'

storiesOf('AppTemplate', module)
  .add('default', () => (
    <Provider store={storeWithEmptyState}>
      <AppTemplate />
    </Provider>
  ))
