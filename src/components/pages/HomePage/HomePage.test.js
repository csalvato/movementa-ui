import React from 'react'
import { shallow, mount } from 'enzyme'
import ConnectedHomePage, { HomePage } from './HomePage'
import { Logo, SearchForm } from 'components'
import { storeWithEmptyState } from 'configureStore'
import { Provider } from 'react-redux'

it('renders', () => {
  shallow(<HomePage />)
})

it("renders a logo", function(){
  const wrapper = shallow(<HomePage />);
  expect(wrapper.find(Logo)).toBePresent()
});

xit("renders a SearchForm", function(){
  // Skipped because I need to restructure how autocompleteService is handled
  // in the SearchForm component. The instantiation of that object should probably
  // exist in the actions files, not in the component itself. It existing there
  // is making mounting the component difficult since window.google is not defined.
  const wrapper = mount(<Provider store={storeWithEmptyState}><HomePage /></Provider>);
  expect(wrapper.find(SearchForm)).toBePresent()
});
