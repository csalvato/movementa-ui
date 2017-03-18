import React from 'react';
import { render } from 'react-dom';
import './index.css';
import theme from './toolbox/theme.js';
import './toolbox/theme.css';
import 'flexboxgrid';
import 'flexboxgrid-helpers/dist/flexboxgrid-helpers.min.css';
import 'roboto-fontface';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';

import routes from 'routes';

const root = document.getElementById('root')
const history = useRouterHistory(createHistory)({ basename: process.env.PUBLIC_PATH })

const renderApp = () => (
  <ThemeProvider theme={theme}>
    <Router key={Math.random()} history={history} routes={routes} />
  </ThemeProvider>
)

render(renderApp(), root)
