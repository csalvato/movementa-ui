import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppBarHeader } from 'components'

storiesOf('AppBarHeader', module)
  .add('default', () => (
    <AppBarHeader />
  ))
