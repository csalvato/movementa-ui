import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultsPage, DirectoryEntry } from 'components'
import AppTemplate from '../../templates/AppTemplate/AppTemplate'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers'

const store = createStore(reducer)


const results = [<DirectoryEntry
                  key={1}
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
                 key={2}
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
                  key={3}
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
                 key={4}
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
    <Provider store={store}>
      <AppTemplate>
        <SearchResultsPage results={results}/>
      </AppTemplate>
    </Provider>
  ))
  .add('standalone', () => (
      <Provider store={store}>
        <SearchResultsPage results={results}/>
      </Provider>
    ))
