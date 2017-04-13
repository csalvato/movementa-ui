import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'redux'
import ConnectedSearchResultsPage,
       { SearchResultsPage } from './SearchResultsPage'
import { DirectoryEntry, HeadlineHeader } from 'components'
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import { push } from 'react-router-redux'
import { storeWithEmptyState } from 'configureStore'
import configureMockStore from 'redux-mock-store'

const results = [{ id: 1,
                  name: "NY Strong",
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
                },
                { id: 2,
                  name: "NY Strong",
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
                }
              ]

it('renders', () => {
  shallow( <SearchResultsPage query=""/>)
})

it('renders circular waiting bar is isFetchingSearchResults prop is set', () => {
  const wrapper = shallow( <SearchResultsPage query="" isFetchingSearchResults/>)
  expect(wrapper).toContainReact(<ProgressBar type='circular' mode='indeterminate' />)
})

it('renders .no-results when no results and isFetchingSearchResults is false', () => {
  const wrapper = shallow( <SearchResultsPage query=""/>)
  expect(wrapper.find('.no-results')).toBePresent();
})

it('renders a list of DirectoryEntry components when results and isFetchingSearchResults is false', () => {
  const wrapper = shallow( <SearchResultsPage query="" results={results}/>)
  expect(wrapper.find(DirectoryEntry)).toHaveLength(2);
})

it("renders the search query in the headline", function(){
  const wrapper = shallow( <SearchResultsPage query="foobar"/>)
  expect(wrapper).toContainReact(<HeadlineHeader>Adult Gymnastics near foobar</HeadlineHeader>);
});

it("redirects to the home page if no URL query is specified", function(){
  const mockDispatch = jest.fn()
  const wrapper = mount(<SearchResultsPage
                          query=""
                          dispatch={mockDispatch}
                          location={{search:""}}
                          />)
  expect(mockDispatch).toBeCalledWith(push('/'))
});

it("does not redirect if a URL query is specified, but dispatches a different action (to fetch)", function(){
  const mockDispatch = jest.fn()
  const wrapper = mount(<SearchResultsPage
                          query=""
                          dispatch={mockDispatch}
                          location={{search:"?q=foobar"}}/>)
  expect(mockDispatch).not.toBeCalledWith(push('/'))
  expect(mockDispatch).toBeCalledWith(expect.any(Function))
});

xit("gets search results from URL when mounted", function(){
  // No idea how to implement this to make sure it is fetching results
  // And not calling some other random function.
});
