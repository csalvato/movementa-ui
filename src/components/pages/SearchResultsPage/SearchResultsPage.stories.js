import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultsPage, DirectoryEntry } from 'components'
import AppTemplate from '../../templates/AppTemplate/AppTemplate'

const results = [<DirectoryEntry
                  location={ { name: "NY Strong",
                               addressLine1: "300 Phillips Park Rd.",
                               addressLine2: "Suite 205",
                               city: "Mamaroneck",
                               state: "NY",
                               zip: "10543",
                               phone: "7182523974",
                               email: "csalvato@gmail.com",
                               lat: -78.2490104891,
                               lng: -73.2490104891,
                               hasAdultOpenGym: true,
                               hasAdultGymnasticsClasses: false
                             } }/>,
                <DirectoryEntry
                 location={ { name: "NY Strong",
                              addressLine1: "300 Phillips Park Rd.",
                              addressLine2: "Suite 205",
                              city: "Mamaroneck",
                              state: "NY",
                              zip: "10543",
                              phone: "7182523974",
                              email: "csalvato@gmail.com",
                              lat: -78.2490104891,
                              lng: -73.2490104891,
                              hasAdultOpenGym: true,
                              hasAdultGymnasticsClasses: false
                            } }/>,
                <DirectoryEntry
                  location={ { name: "NY Strong",
                               addressLine1: "300 Phillips Park Rd.",
                               addressLine2: "Suite 205",
                               city: "Mamaroneck",
                               state: "NY",
                               zip: "10543",
                               phone: "7182523974",
                               email: "csalvato@gmail.com",
                               lat: -78.2490104891,
                               lng: -73.2490104891,
                               hasAdultOpenGym: true,
                               hasAdultGymnasticsClasses: false
                             } }/>,
                <DirectoryEntry
                 location={ { name: "NY Strong",
                              addressLine1: "300 Phillips Park Rd.",
                              addressLine2: "Suite 205",
                              city: "Mamaroneck",
                              state: "NY",
                              zip: "10543",
                              phone: "7182523974",
                              email: "csalvato@gmail.com",
                              lat: -78.2490104891,
                              lng: -73.2490104891,
                              hasAdultOpenGym: true,
                              hasAdultGymnasticsClasses: false
                            } }/>]

storiesOf('SearchResultsPage', module)
  .add('embedded', () => (
    <AppTemplate>
      <SearchResultsPage results={results}/>
    </AppTemplate>
  ))
  .add('standalone', () => (
      <SearchResultsPage results={results}/>
    ))
