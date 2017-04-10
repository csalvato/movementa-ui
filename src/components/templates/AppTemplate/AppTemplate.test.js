import React from 'react'
import { shallow } from 'enzyme'
import AppTemplate from './AppTemplate'

it('renders', () => {
  shallow(<AppTemplate />)
})

it('renders with children', () => {
  shallow(<AppTemplate><div>test</div></AppTemplate>)
})

it('renders with children content', () => {
  const wrapper = shallow(<AppTemplate><div>foo</div></AppTemplate>)
  expect(wrapper).toIncludeText("foo")
})
