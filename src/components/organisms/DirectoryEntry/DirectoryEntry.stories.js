import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DirectoryEntry } from 'components'

storiesOf('DirectoryEntry', module)
  .add('default', () => (
      <DirectoryEntry />
  ))
