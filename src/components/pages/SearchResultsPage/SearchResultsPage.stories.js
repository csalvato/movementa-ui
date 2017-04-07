import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultsPage, DirectoryEntry } from 'components'
import AppTemplate from '../../templates/AppTemplate/AppTemplate'
import configureStore from 'configureStore'
import { Provider } from 'react-redux'

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
                               } }
                  />,
                <DirectoryEntry
                  key={2}
                  location={ { name: "NY Strong",
                               addressLine1: "252 Phillips Park Rd.",
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
                             } }
                />,
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
                             } }
                />,
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
                             } }
                />]

const fetchingState = {searchResults: { results: [],
                                  isFetching: true
                                }
                            }
const storeWithFetching = configureStore(fetchingState);

const stateWithResults = {searchResults: { results: results,
                                     isFetching: false
                                   }
                   }
const storeWithResults = configureStore(stateWithResults);

storiesOf('SearchResultsPage', module)
  .add('embedded', () => (
    <Provider store={storeWithResults}>
      <AppTemplate>
        <SearchResultsPage/>
      </AppTemplate>
    </Provider>
  ))
  .add('fetching results', () => (
    <Provider store={storeWithFetching}>
      <AppTemplate>
        <SearchResultsPage/>
      </AppTemplate>
    </Provider>
  ))
  .add('standalone', () => (
    <Provider store={storeWithResults}>
      <SearchResultsPage/>
    </Provider>
  ))
