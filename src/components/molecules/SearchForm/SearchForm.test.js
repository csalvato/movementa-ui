import React from 'react'
import { shallow } from 'enzyme'
import ConnectedSearchForm, { SearchForm } from './SearchForm'

it('renders without crashing', () => {
  shallow(<SearchForm />)
})

it("renders with two rows by default", function(){
  const wrapper = shallow(<SearchForm />);
  expect(wrapper.find('.row')).toHaveLength(2)
});

it("renders with one rows when horizontal specified", function(){
  const wrapper = shallow(<SearchForm horizontal/>);
  expect(wrapper.find('.row')).toHaveLength(1)
});
