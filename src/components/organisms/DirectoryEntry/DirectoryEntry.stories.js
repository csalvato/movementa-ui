import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DirectoryEntry } from 'components'
import Layout from 'react-toolbox/lib/layout/Layout'

storiesOf('DirectoryEntry', module)
  .add('default', () => (
      <Layout>
        <DirectoryEntry />
      </Layout>
  ))
