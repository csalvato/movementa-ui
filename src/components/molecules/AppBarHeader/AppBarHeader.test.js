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

it("renders a search form", function(){
  const wrapper = mount(<Provider store={store}><AppBarHeader /></Provider>);
  expect(wrapper.find(SearchForm)).toBePresent()
});
