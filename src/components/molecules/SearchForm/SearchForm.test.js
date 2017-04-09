import React from 'react'
import { shallow } from 'enzyme'
import ConnectedSearchForm, { SearchForm } from './SearchForm'

it('renders', () => {
  shallow(<SearchForm />)
})
