import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { HomeTemplate } from 'components'

storiesOf('HomeTemplate', module)
  .add('default', () => (
    <HomeTemplate />
  ))
