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
import 'airbnb-js-shims';
import { Provider } from 'react-redux'
import { storeWithEmptyState, history } from 'configureStore'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router';
import { HomePage,
         SearchResultsPage } from 'components';
import AppTemplate from './components/templates/AppTemplate/AppTemplate'

// Google Analytics code broke when moving to react-router-redux
//  Must be reimplemented using Middleware.

// import ReactGA from 'react-ga';
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   ReactGA.initialize('UA-96092057-2'); //Dev tracking code
// } else {
//   ReactGA.initialize('UA-96092057-1'); //Prod tracking code
// }
//
// function logPageView() {
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
// }

const root = document.getElementById('root')

const store = storeWithEmptyState;

const renderApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/search" component={AppTemplate}/>
          <Route path="/search" component={SearchResultsPage}/>
          {/* <Route path="*" component={NotFoundPage} /> */}
        </div>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
)

render(renderApp(), root)
