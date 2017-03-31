import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { HeadlineHeader } from 'components'

storiesOf('HeadlineHeader', module)
  .add('default', () => (
    <HeadlineHeader />
  ))
  .add('with child', () => (
    <HeadlineHeader>Some Child Text</HeadlineHeader>
  ))
