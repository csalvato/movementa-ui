import React from 'react'
import { shallow } from 'enzyme'
import HeadlineHeader from './HeadlineHeader'

it('renders without crashing', () => {
   shallow(<HeadlineHeader />)
})
