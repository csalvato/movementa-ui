import React from 'react'
import { shallow, mount } from 'enzyme'
import AppBarHeader from './AppBarHeader'
import { Logo, SearchForm } from 'components'
import { storeWithEmptyState } from 'configureStore'
import { Provider } from 'react-redux'

const store = storeWithEmptyState

it('renders', () => {
  shallow(<AppBarHeader />);
})

it("renders a logo", function(){
  const wrapper = shallow(<AppBarHeader />);
  expect(wrapper.find(Logo)).toBePresent()
});

xit("renders a search form", function(){
  // Skipped because I need to restructure how autocompleteService is handled
  // in the SearchForm component. The instantiation of that object should probably
  // exist in the actions files, not in the component itself. It existing there
  // is making mounting the component difficult since window.google is not defined.
  const wrapper = mount(<Provider store={store}><AppBarHeader /></Provider>);
  expect(wrapper.find(SearchForm)).toBePresent()
});

xit("renders with empty string for query by default", function(){
  // To test this, we need to mount the component.
  // That requires fixing the problem described in the spec for
  // `renders a search form`
  const wrapper = mount(<AppBarHeader />);
  expect(wrapper).toHaveProp('query', '');
});

xit("renders with an empty array for autocompleteItems by default", function(){
  // To test this, we need to mount the component.
  // That requires fixing the problem described in the spec for
  // `renders a search form`
  const wrapper = mount(<AppBarHeader />);
  expect(wrapper).toHaveProp('autocompleteItems', []);
});

xit("provides the query to the search form", function(){
  // Need to figure out how to implement this. Seems like it's not worthwhile
  // until I figure out the mounting issue.
});

xit("provides the autocompleteItems to the search form", function(){
  // Need to figure out how to implement this. Seems like it's not worthwhile
  // until I figure out the mounting issue.
});
