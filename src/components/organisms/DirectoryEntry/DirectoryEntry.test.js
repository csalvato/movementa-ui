import React from 'react'
import { shallow } from 'enzyme'
import DirectoryEntry from './DirectoryEntry'

const location = {  name: "NY Strong",
                    addressLine1: "300 Phillips Park Rd.",
                    addressLine2: "Suite 205",
                    city: "Mamaroneck",
                    state: "NY",
                    zip: "10543",
                    phone: "7182523974",
                    email: "csalvato@gmail.com",
                    lat: -78.2490104891,
                    lng: -73.2490104891,
                    hasAdultOpenGym: true,
                    hasAdultGymnasticsClasses: false
                  }

it('renders without crashing', () => {
  shallow(<DirectoryEntry location={location} />)
})

it('creates properly formatted Google Link', () => {
  const wrapper = shallow(<DirectoryEntry location={location} />)
  const googleMapsUrl="http://maps.google.com/?q=300+Phillips+Park+Rd.+Suite+205+Mamaroneck+NY+10543"
  expect(wrapper.html()).toContain("href=\"http://maps.google.com/?q=300+Phillips+Park+Rd.+Suite+205+Mamaroneck+NY+10543\"")
})

it('creates properly formatted Phone URL', () => {
  const wrapper = shallow(<DirectoryEntry location={location} />)
  const googleMapsUrl="http://maps.google.com/?q=300+Phillips+Park+Rd.+Suite+205+Mamaroneck+NY+10543"
  expect(wrapper.html()).toContain("tel:7182523974")
})

it('creates properly formatted Phone String', () => {
  const wrapper = shallow(<DirectoryEntry location={location} />)
  const googleMapsUrl="http://maps.google.com/?q=300+Phillips+Park+Rd.+Suite+205+Mamaroneck+NY+10543"
  expect(wrapper).toIncludeText("(718) 252-3974")
})
