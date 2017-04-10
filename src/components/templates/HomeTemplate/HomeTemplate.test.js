import React from 'react'
import { shallow } from 'enzyme'
import HomeTemplate from './HomeTemplate'

it('renders', () => {
  shallow(<HomeTemplate />)
})

it('renders with children', () => {
  shallow(<HomeTemplate><div>test</div></HomeTemplate>)
})

it('renders with children content', () => {
  const wrapper = shallow(<HomeTemplate><div>foo</div></HomeTemplate>)
  expect(wrapper).toIncludeText("foo")
})
