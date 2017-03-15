import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppTemplate } from 'components'

storiesOf('AppTemplate', module)
  .add('default', () => (
    <AppTemplate />
  ))
