import React from 'react'
import { shallow, mount } from 'enzyme'
import FeatureIcon from './FeatureIcon'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

it('renders without crashing with children', () => {
  shallow(<FeatureIcon>test</FeatureIcon>)
})

it('throws an error when rendered without children', () => {
  // Spy on console.error
  console.error = jest.fn()
  shallow(<FeatureIcon/>)
  expect(console.error).toHaveBeenCalled();
})

it('renders with child text', () => {
  const wrapper = shallow(<FeatureIcon>test</FeatureIcon>)
  expect(wrapper.contains("test")).toEqual(true)
})

it('renders with FontIcon with value of check_circle when hasFeature is set', () => {
  const wrapper = mount(<FeatureIcon hasFeature>test</FeatureIcon>)
  expect(wrapper.find(FontIcon).prop('value')).toEqual('check_circle')
})

it('renders with FontIcon with value of cancel when hasFeature is not set', () => {
  const wrapper = mount(<FeatureIcon>test</FeatureIcon>)
  expect(wrapper.find(FontIcon).prop('value')).toEqual('cancel')
})

it('renders with FontIcon class feature-icon--fail when hasFeature is set', () => {
  const wrapper = mount(<FeatureIcon hasFeature>test</FeatureIcon>)
  expect(wrapper.find(FontIcon).hasClass('feature-icon--pass')).toEqual(true)
})

it('renders with FontIcon class feature-icon--pass when hasFeature is not set', () => {
  const wrapper = mount(<FeatureIcon>test</FeatureIcon>)
  expect(wrapper.find(FontIcon).hasClass('feature-icon--fail')).toEqual(true)
})
