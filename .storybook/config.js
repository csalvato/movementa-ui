import React from 'react'
import { configure, addDecorator } from '@kadira/storybook';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import theme from '../src/toolbox/theme.js';
import '../src/toolbox/theme.css';
import '../src/index.css';
import 'flexboxgrid';
import 'flexboxgrid-helpers/dist/flexboxgrid-helpers.min.css'
import 'roboto-fontface';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))

configure(loadStories, module);
