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
import { Route, Switch } from 'react-router';
import AppTemplate from './components/templates/AppTemplate/AppTemplate'
import HomeTemplate from './components/templates/HomeTemplate/HomeTemplate'

const root = document.getElementById('root')

const store = storeWithEmptyState;

const renderApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomeTemplate}/>
          <Route path="/search" component={AppTemplate} />
          <Route component={() => <hr/>}/>
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
)

render(renderApp(), root)
