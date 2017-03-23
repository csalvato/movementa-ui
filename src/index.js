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
import ReactGA from 'react-ga';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  ReactGA.initialize('UA-96092057-2'); //Dev tracking code
} else {
  ReactGA.initialize('UA-96092057-1'); //Prod tracking code
}

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const root = document.getElementById('root')
const history = useRouterHistory(createHistory)({ basename: process.env.PUBLIC_PATH })

const renderApp = () => (
  <ThemeProvider theme={theme}>
    <Router key={Math.random()}
            history={history}
            routes={routes}
            onUpdate={logPageView}/>
  </ThemeProvider>
)

render(renderApp(), root)
