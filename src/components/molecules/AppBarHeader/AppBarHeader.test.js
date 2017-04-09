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
