import React from 'react'
import { Provider } from 'redux'
import { shallow, mount } from 'enzyme'
import AppTemplate from './AppTemplate'
import { Route } from 'react-router'
import { AppBarHeader, SearchResultsPage } from 'components'

it('renders', () => {
  shallow(<AppTemplate match={{url: "/"}}/>)
})
