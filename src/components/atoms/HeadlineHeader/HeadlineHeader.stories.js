import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { HeadlineHeader } from 'components'

storiesOf('HeadlineHeader', module)
  .add('with child (default)', () => (
    <HeadlineHeader>Some Child Text</HeadlineHeader>
  ))
