import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Logo } from 'components'
import backgroundColor from 'react-storybook-decorator-background'

storiesOf('Logo', module)
  .addDecorator(backgroundColor(['#303F9F', '#000000', '#ffffff']))
  .add('default (without text)', () => (
    <Logo />
  ))
  .add('with text', () => (
    <Logo withText/>
  ))
