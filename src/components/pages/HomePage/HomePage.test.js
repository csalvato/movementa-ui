import React from 'react'
import { shallow, mount } from 'enzyme'
import ConnectedHomePage, { HomePage } from './HomePage'
import { Logo, SearchForm } from 'components'
import { storeWithEmptyState } from 'configureStore'
import { Provider } from 'react-redux'

it('renders', () => {
  shallow(<HomePage pageTitle="foo"/>)
})

it("renders a logo", function(){
  const wrapper = shallow(<HomePage pageTitle="foo"/>);
  expect(wrapper.find(Logo)).toBePresent()
});

it("renders a SearchForm", function(){
  const wrapper = mount(<Provider store={storeWithEmptyState}>
                          <HomePage
                            pageTitle="foo"
                            dispatch={()=>{}}
                          />
                        </Provider>);
  expect(wrapper.find(SearchForm)).toBePresent()
});
