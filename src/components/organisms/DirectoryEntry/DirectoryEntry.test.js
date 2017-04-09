import React from 'react'
import { shallow } from 'enzyme'
import DirectoryEntry from './DirectoryEntry'

it('renders', () => {
  shallow(<DirectoryEntry
            location={ {  name: "NY Strong",
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
                          hasAdultGymnasticsClasses: false }
                    }
          />)
})
