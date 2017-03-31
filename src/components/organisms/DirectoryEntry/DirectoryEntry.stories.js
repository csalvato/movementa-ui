import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DirectoryEntry } from 'components'
import Layout from 'react-toolbox/lib/layout/Layout'

storiesOf('DirectoryEntry', module)
  .add('default', () => (
      <Layout>
        <DirectoryEntry
          location={ { name: "NY Strong",
                       addressLine1: "300 Phillips Park Rd.",
                       addressLine2: "Suite 205",
                       city: "Mamaroneck",
                       state: "NY",
                       zip: "10543",
                       phone: "718-252-3974",
                       email: "csalvato@gmail.com",
                       lat: -78.2490104891,
                       lng: -73.2490104891,
                       hasAdultOpenGym: true,
                       hasAdultGymnasticsClasses: false
                     } }/>
      </Layout>
  ))
