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
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers'
import logger from 'redux-logger'

export default function configureStore() {
  const store = createStore(
      reducer,
      //Uses logger from `redux-logger`
      applyMiddleware(logger)
    )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../src/reducers', () => {
      const nextRootReducer = require('../src/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();

const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </Provider>
))

configure(loadStories, module);
