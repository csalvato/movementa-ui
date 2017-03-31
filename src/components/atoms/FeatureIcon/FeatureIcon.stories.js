import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FeatureIcon } from 'components'
import Layout from 'react-toolbox/lib/layout/Layout'

storiesOf('FeatureIcon', module)
  .add('does not have feature (default)', () => (
      <Layout>
        <FeatureIcon>
          Adult Gymnastics
        </FeatureIcon>
      </Layout>
  ))
  .add('has feature', () => (
      <Layout>
        <FeatureIcon hasFeature>
          Adult Gymnastics
        </FeatureIcon>
      </Layout>
  ))
