import React from 'react'
import { shallow } from 'enzyme'
import HeadlineHeader from './HeadlineHeader'

it('renders without crashing with children', () => {
  shallow(<HeadlineHeader>test</HeadlineHeader>)
})

it('throws an error when rendered without children', () => {
  // Spy on console.error
  console.error = jest.fn()
  shallow(<HeadlineHeader/>)
  expect(console.error).toHaveBeenCalled();
})

it('renders with child text', () => {
  const wrapper = shallow(<HeadlineHeader>test</HeadlineHeader>)
  expect(wrapper).toIncludeText("test")
})
