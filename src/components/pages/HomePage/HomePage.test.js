import React from 'react'
import { shallow } from 'enzyme'
import ConnectedHomePage, { HomePage } from './HomePage'

it('renders', () => {
  shallow(<HomePage />)
})
