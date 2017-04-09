import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

it('renders', () => {
  shallow(<Logo />)
})

it('renders without text by default', () => {
  const wrapper = shallow(<Logo/>)
  expect(wrapper.contains('MOVEMENTA')).toEqual(false)
})

it('renders', () => {
  const wrapper = shallow(<Logo withText/>)
  expect(wrapper.contains('MOVEMENTA')).toEqual(true)
})
