import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { HomePage } from 'components'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers'

const store = createStore(reducer)

storiesOf('HomePage', module)
  .add('default', () => (
    <Provider store={store}>
      <HomePage />
    </Provider>
  ))
