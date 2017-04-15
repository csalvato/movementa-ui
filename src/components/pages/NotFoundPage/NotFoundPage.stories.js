import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { NotFoundPage } from 'components'
import { Provider } from 'react-redux'
import { storeWithEmptyState } from 'configureStore'

storiesOf('Home Page', module)
  .add('default', () => (
    <Provider store={storeWithEmptyState}>
        <NotFoundPage />
    </Provider>
  ))
